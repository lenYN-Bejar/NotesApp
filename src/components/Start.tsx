import { useNotes } from '../store/store'

export const Start = () => {
  const getNotes = useNotes(state => state.fetchNotes)
  const handleClick = () => {
    getNotes()
  }
  return (
        <button onClick={handleClick}>Init App</button>
  )
}
