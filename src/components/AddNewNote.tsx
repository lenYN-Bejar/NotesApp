import { useNotes } from '../store/store'

export const NewNote = () => {
  const saveNote = useNotes(state => state.saveNote)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    saveNote({ title, description })
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
