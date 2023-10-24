import { create } from 'zustand'
import { deleteNotes, edidNotes, getAllNotes, saveNotes } from '../services/notes'

interface Note {
  title?: string
  description?: string
}

interface NoteWithId extends Note {
  id: string
}

interface State {
  notes: NoteWithId[]
  fetchNotes: () => Promise<void>
  saveNote: (note: Note) => Promise<void>
  deleteNote: (id: string) => Promise<void>
  editNote: (id: string, note: Note) => Promise<void>
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
  deleteNote: async (id: string) => {
    await deleteNotes(id)
    set(state => ({ notes: state.notes.filter(note => note.id !== id) }))
  },
  editNote: async (id, note) => {
    const data = await edidNotes(id, note)
    set(state => ({ notes: state.notes.map(note => note.id === id ? data : note) }))
  }
}))
