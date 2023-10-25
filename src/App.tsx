import './App.css'
import { ListOfNotes } from './components/ListOfNotes'
import { useNotes } from './store/store'
// import { Start } from './components/Start'
import { NewNote } from './components/AddNewNote'
import { useEffect } from 'react'

function App () {
  // const allNotes = useNotes(state => state.notes)
  const allNotes = useNotes(state => state.fetchNotes)

  useEffect(() => {
    allNotes()
  }, [])

  return (
    <div className='grid align-middle justify-center bg-blue-100'>
      <h1 className='text-center text-7xl font-bold text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)] shadow-black'>App Notes</h1>
      {/* {allNotes.length === 0 && <Start/>}
      {allNotes.length > 0 && <ListOfNotes/>} */}
      <ListOfNotes></ListOfNotes>
      <NewNote></NewNote>
    </div>
  )
}

export default App
