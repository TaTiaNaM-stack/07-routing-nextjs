export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export type NoteTags = {
  tags: NoteTag[];
};

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteData {
  title: string;
  content?: string;
  tag: NoteTag;
}

