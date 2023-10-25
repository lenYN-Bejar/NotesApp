import { create } from 'zustand'
import { deleteNotes, edidNotes, getAllNotes, saveNotes } from '../services/notes'
import { type NoteId, type Note, type NoteWithId } from '../type'

interface State {
  notes: NoteWithId[]
  fetchNotes: () => Promise<void>
  saveNote: (note: Note) => Promise<void>
  deleteNote: (id: NoteId) => Promise<void>
  editNote: (note: Note, id: NoteId) => Promise<void>
}

export const useNotes = create<State>((set) => ({
  notes: [],
  fetchNotes: async () => {
    const allNotes = await getAllNotes()
    set({ notes: allNotes })
  },
  saveNote: async (note: Note) => {
    const data = await saveNotes(note)
    set(state => ({ notes: [...state.notes, data] }))
  },
  deleteNote: async (id) => {
    await deleteNotes(id)
    set(state => ({ notes: state.notes.filter(note => note.id !== id) }))
  },
  editNote: async (note, id) => {
    const data = await edidNotes(note, id)
    set(state => ({ notes: state.notes.map(e => e.id === id ? data : e) }))
  }
}))
