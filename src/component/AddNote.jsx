import React from "react"

function AddNote(props) {
    return <div>
        <form>
            <input onChange={(event) => {
                props.handleChange(event)
            }} name="title" placeholder="Title" />
            <textarea onChange={(event) => {
                props.handleChange(event)
            }} name="content" placeholder="Take a note..." rows="3" />
            {/* Pass the new note back to the App. */}
            <button onClick={(event) => {
                props.addNote(event)
            }}>Add</button>
        </form>
    </div>
}

export default AddNote