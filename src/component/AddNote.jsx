import React from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function AddNote(props) {
    const [isExpanded, setExpanded] = React.useState(false)

    function expandInputArea() {
        setExpanded(true)
    }

    return <div >
        <form className="create-note">
            {isExpanded && <input onChange={(event) => {
                props.handleChange(event)
            }} name="title" placeholder="Title" />}

            <textarea
                onChange={(event) => {
                    props.handleChange(event)
                }}
                onClick={() => expandInputArea()}
                name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
            {/* Pass the new note back to the App. */}

            <Zoom in={isExpanded}>
                <Fab onClick={(event) => {
                    props.addNote(event)
                }}><AddIcon /></Fab>
            </Zoom>
        </form>
    </div>
}

export default AddNote