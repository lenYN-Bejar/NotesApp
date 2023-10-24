import { useNotes } from '../store/store'

interface note {
  title?: string
  description?: string
}

export const EdidNote = ({ id }) => {
  const edidNote = useNotes(state => state.editNote)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const note: note = {}

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const title = formData.get('title') as string
    if (title !== '') {
      note.title = title
    }
    const description = formData.get('description') as string
    if (description !== '') {
      note.description = description
    }
    edidNote(id, note)
    form.reset()
  }
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="text" name="title" placeholder='add title'/>
            <input type="text" name="description" placeholder='add note'/>
            <button type="submit">Create</button>
        </form>
    </div>
  )
}
