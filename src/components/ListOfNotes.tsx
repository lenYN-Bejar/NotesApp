import { useNotes } from '../store/store'
import { EdidNote } from './EdidNote'

export const ListOfNotes = () => {
  const allNotes = useNotes(state => state.notes)
  const deletenote = useNotes(state => state.deleteNote)

  return (
        <div className='max-w-4xl'>
            {allNotes.map(note => (
                <section className='grid grid-cols-5 p-2 w-96 gap-1 bg-white border-black rounded-md border-2 m-3' key={note.id}>
                    <main className='flex flex-col gap-1 col-span-4'>
                        <h2 className='p-2 border-blue-100 rounded-sm border-2'>{note.title}</h2>
                        <p className='p-2 border-blue-100 rounded-sm border-2'>{note.description}</p>
                    </main>
                    <footer className='col-span-1 flex flex-col justify-center border-blue-100 rounded-sm border-2'>
                        <button onClick={() => { deletenote(note.id) } }>❌</button>
                        <EdidNote id = {note.id}></EdidNote>
                    </footer>
                </section>
            ))}
        </div>
  )
}
