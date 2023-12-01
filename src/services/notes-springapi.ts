import { type NoteId, type Note } from '../type'

export const getAllNotes = async () => {
  const res = await fetch('http://localhost:8080/api/notes')
  const json = await res.json()
  return json
}

export const saveNotes = async (note: Note) => {
  const res = await fetch('http://localhost:8080/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return await res.json()
}

export const deleteNotes = async (id: NoteId) => {
  await fetch(`http://localhost:8080/api/notes/${id}`, {
    method: 'DELETE'
  })
}

export const edidNotes = async (note: Note, id: NoteId) => {
  const res = await fetch(`http://localhost:8080/api/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  return await res.json()
}
