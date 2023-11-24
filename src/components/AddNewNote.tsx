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
    <div className='max-w-4xl '>
        <form onSubmit={handleSubmit} className="bg-black m-3 p-2 w-96 flex flex-col border-black rounded-md border-2 gap-1">
            <input className='bg-black p-2 border-blue-100 rounded-sm border-2 text-white' type="text" name="title" placeholder='add title'/>
            <textarea className='h-60 bg-black p-2 border-blue-100 rounded-sm border-2 text-white' name="description" placeholder='add note'/>
            <button className='hover:scale-110 text-center text-2xl font-bold text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)] shadow-black' type="submit">Create</button>
        </form>
    </div>
  )
}
