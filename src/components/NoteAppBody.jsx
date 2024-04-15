import React from 'react';
import NoteInput from './NoteInput';
import { NoteList } from './NoteList';
function NoteAppBody ({notes,onAddNotesHandler,onArchived,onDelete}) {
  return (
    <div className="note-app__body">
      <NoteInput addNotes={onAddNotesHandler} />
      <h2>Catatan Aktif</h2>
      {notes.some(note => !note.archived) ? (
        <NoteList
          notes={notes.filter(note => !note.archived)}
          onDelete={onDelete} isArchived={onArchived}
        > Arsipkan </NoteList>
      ) : (
          <p className="notes-list__empty-message">tidak ada catatan</p>
      )}
      <h2>Arsip</h2>
      {notes.some(note => note.archived) ? (
        <NoteList
          notes={notes.filter(note => note.archived)}
          onDelete={onDelete} isArchived={onArchived}
        >Pindahkan</NoteList>
      ) : (
        <p className="notes-list__empty-message">tidak ada catatan</p>
      )}
    </div>
  );
}
export default NoteAppBody
