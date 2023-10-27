import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter

} from '@material-tailwind/react'
import { useNotes } from '../store/store'
import { type Note } from '../type'

interface NoteId {
  id: number
}

export function EdidNote ({ id }: NoteId) {
  const edidNote = useNotes(state => state.editNote)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => { setOpen(!open) }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const note: Note = {}

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
    edidNote(note, id)
    form.reset()
  }

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color='white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
      >
        <DialogHeader>Task Edid</DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit} className="p-2 m-3 flex flex-col border-black rounded-md border-2">
              <input className='p-2 border-blue-100 rounded-sm border-2' type="text" name="title" placeholder='add title'/>
              <input className='p-2 border-blue-100 rounded-sm border-2' type="text" name="description" placeholder='add note'/>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button type='submit' variant="gradient" color="green" onClick={handleOpen}>
                    Create
                </Button>
              </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </>
  )
}
