import { useNotes } from '../store/store'
import { DialogCustomAnimation } from './DialogCustomAnimation'

export const ListOfNotes = () => {
  const allNotes = useNotes(state => state.notes)
  const deletenote = useNotes(state => state.deleteNote)
  const handleClick = (id: string) => {
    deletenote(id)
  }
  return (
        <div className='w-full'>
            {allNotes.map(note => (
                <section className=' border-black rounded-md border-2 m-3' key={note.id}>
                    <main>
                        <h2>{note.title}</h2>
                        <p>{note.description}</p>
                    </main>
                    <footer>
                        <DialogCustomAnimation id = {note.id}></DialogCustomAnimation>
                        <button onClick={() => { handleClick(note.id) } }>Delete Note</button>
                    </footer>
                </section>
            ))}
        </div>
  )
}
