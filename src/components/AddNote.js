import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState(''); 
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  };

  const handleTitleChange = (event)=> {
    if (event.target.value.length <= 25) {
      setNoteTitle(event.target.value); 
    }
}
  const handleSaveClick = () => {
    if (noteText.trim().length > 0||noteTitle.trim().length>0) {
      handleAddNote(noteText,noteTitle);
      setNoteText(''); 
      setNoteTitle("");
    }
  };

  return (
    <div className="note new">
      <textarea onChange={handleTitleChange} value={noteTitle} rows='1' cols='10' className="addnote-title" placeholder="Title"/>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining </small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
