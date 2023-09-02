import React, { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import NoteList from "./Componenets/NoteList"; // Corrected typo in the import path

import Search from "./Componenets/Search"; // Corrected typo in the import path
import Header from "./Componenets/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    // ...other notes
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to localStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (newNoteText) => {
    const newNote = {
      id: nanoid(),
      text: newNoteText,
      date: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />{" "}
        {/* Pass the setSearchText function */}
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
