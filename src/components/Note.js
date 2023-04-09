import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date,title, handleDeleteNote }) => {
  return (
    <div className="note">
      <div className="note-content" >
        <span className="note-title">{title}</span>
        <span>{text}</span>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
