import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes.js"
import AddNote from "./AddNote.jsx"

function App() {
    // Create a constant that keeps track of the title and content.
    const [newNote, setNewNote] = React.useState({
        title: "",
        content: ""
    })

    // handle state list of note
    const [listNote, setListNote] = React.useState(notes)

    // Add new note to an array.
    function addNote(event) {
        const addedNote = {
            key: listNote.length + 1,
            title: newNote.title,
            content: newNote.content
        }

        setListNote(prevList => {
            return [...prevList, addedNote]
        })
        // prevent reload page
        event.preventDefault()
    }

    function handleChange(event) {
        const { name, value } = event.target
        setNewNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function deleteNote(id) {
        console.log("item deleted");

    }

    return <div>
        <Header />

        <AddNote addNote={addNote} handleChange={handleChange} />

        {/* Take array and render seperate Note components for each item. */}
        {listNote.map((note) => {
            return <Note key={note.key} id={note.key} title={note.title} content={note.content} deleteNote={deleteNote} />
        })}

        <Footer />
    </div>
}

export default App