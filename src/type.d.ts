export type NoteId = number

export interface Note {
  title?: string
  description?: string
}

export interface NoteWithId extends Note {
  id: NoteId
}
