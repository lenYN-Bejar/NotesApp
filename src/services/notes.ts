export const getAllNotes = async () => {
  const res = await fetch('http://localhost:8080/api/notes')
  const json = await res.json()
  return json
}

export const saveNotes = async (note) => {
  const res = await fetch('http://localhost:8080/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  return await res.json()
}

export const deleteNotes = async (id) => {
  await fetch(`http://localhost:8080/api/notes/${id}`, {
    method: 'DELETE'
  })
}

export const edidNotes = async (note) => {
  console.log('note', note)
  const res = await fetch(`http://localhost:8080/api/notes/${note.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  return await res.json()
}
