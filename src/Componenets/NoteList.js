import React from "react";
import Note from "./Note";
import AddNotes from "./AddNotes";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((notes) => (
        <Note
          id={notes.id}
          text={notes.text}
          date={notes.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNotes handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
