import React, { useState } from "react";
import Modal from "react-modal";

const NoteModal = ({ isShowing, hide, todo, editNote, index }) => {
  const [text, setText] = useState(todo.text);
  const [title, setTitle] = useState(todo.title);

  function handleTitle(title) {
    setTitle(title);
  }
  function handleValue(text) {
    setText(text);
  }

  function saveEdit() {
    console.log(title, text);
    editNote(title, text, index);
    hide();
  }

  return (
    <Modal
      className="noteModal"
      isOpen={isShowing}
      onRequestClose={hide}
      contentLabel="Example Modal"
    >
      <div className="modalForm">
        <input value={title} onChange={(e) => handleTitle(e.target.value)} />
        <input
          className="displayspan"
          value={text}
          onChange={(e) => handleValue(e.target.value)}
        />
        <button className="delete btn btn-outline-danger btn-sm" onClick={hide}>
          close
        </button>
        <button className="btn btn-outline-success btn-sm" onClick={saveEdit}>
          Save
        </button>
      </div>
    </Modal>
  );
};

export default NoteModal;
