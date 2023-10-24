import { useNotes } from '../store/store'
import { EdidNote } from './EdidNote'

export const ListOfNotes = () => {
  const allNotes = useNotes(state => state.notes)
  const deletenote = useNotes(state => state.deleteNote)

  return (
        <div className='w-full'>
            {allNotes.map(note => (
                <section className=' border-black rounded-md border-2 m-3' key={note.id}>
                    <main>
                        <h2>{note.title}</h2>
                        <p>{note.description}</p>
                    </main>
                    <footer>
                        {console.log(typeof note.id)}
                        <EdidNote id = {note.id}></EdidNote>
                        <button onClick={() => { deletenote(note.id) } }>Delete Note</button>
                    </footer>
                </section>
            ))}
        </div>
  )
}
