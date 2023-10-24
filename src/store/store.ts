import { create } from 'zustand'
import { deleteNotes, edidNotes, getAllNotes, saveNotes } from '../services/notes'

interface Note {
  title?: string
  description?: string
}

interface NoteWithId extends Note, id {
}

interface id {
  id?: string
}

interface State {
  notes: NoteWithId[]
  fetchNotes: () => Promise<void>
  saveNote: (note: Note) => Promise<void>
  deleteNote: (id: id) => Promise<void>
  editNote: (note: NoteWithId) => Promise<void>
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
  editNote: async (note) => {
    const data = await edidNotes(note)
    set(state => ({ notes: state.notes.map(e => e.id === note.id ? data : e) }))
  }
}))
