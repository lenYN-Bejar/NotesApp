export type NoteId = string

export interface Note {
  title: string
  description: string
  fechaCreacion: string
}

export interface NoteWithId extends Note {
  id: NoteId
}
