import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter

} from '@material-tailwind/react'
import { useNotes } from '../store/store'

interface note {
  id?: string
  title?: string
  description?: string
}

export function EdidNote ({ id }: note) {
  const edidNote = useNotes(state => state.editNote)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => { setOpen(!open) }

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
    note.id = id
    edidNote(note)
    form.reset()
  }

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
      >
        <DialogHeader>Edita la tarea</DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit} className="flex flex-col">
              <input type="text" name="title" placeholder='add title'/>
              <input type="text" name="description" placeholder='add note'/>
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
