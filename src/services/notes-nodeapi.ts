import { type NoteId, type Note } from '../type'

export const getAllNotes = async () => {
  const res = await fetch('http://localhost:1234/notes')
  const json = await res.json()
  return json
}

export const saveNotes = async (note: Note) => {
  const res = await fetch('http://localhost:1234/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  if (!res.ok) {
    throw new Error('Error')
  }
  return await res.json()
}

export const deleteNotes = async (id: NoteId) => {
  await fetch(`http://localhost:1234/notes/${id}`, {
    method: 'DELETE'
  })
}

export const edidNotes = async (note: Note, id: NoteId) => {
  const res = await fetch(`http://localhost:1234/notes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  return await res.json()
}
