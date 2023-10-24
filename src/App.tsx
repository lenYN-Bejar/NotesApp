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
    <div>
      <h1>App Notes</h1>
      {/* {allNotes.length === 0 && <Start/>}
      {allNotes.length > 0 && <ListOfNotes/>} */}
      <ListOfNotes></ListOfNotes>
      <NewNote></NewNote>
    </div>
  )
}

export default App
