import React from "react";
import "./App.css";
import NoteModal from "./components/modal";
import useModal from "./components/usemodal";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(title, value, new Date().toLocaleString());
    setValue("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p className="date">{"Title, optional"}</p>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-outline-info btn-sm">✓</button>
    </form>
  );
}
function Todo({ todo, index, removeTodo, editNote }) {
  const { isShowing, toggle } = useModal();
  return (
    <div className="col todo">
      <span className="displayspan" onClick={toggle}>
        <h3 className="title">{todo.title}</h3>
        {todo.text}
        <i className="date">{todo.date}</i>
      </span>
      <div>
        <button
          className="delete btn btn-outline-danger btn-sm"
          onClick={() => removeTodo(index)}
        >
          x
        </button>
      </div>
      <NoteModal
        index={index}
        todo={todo}
        isShowing={isShowing}
        hide={toggle}
        editNote={editNote}
      />
    </div>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      title: "I'm a note!",
      text: "Note Party! ",
      date: "01/01/1999, 0:00:01 AM",
    },
  ]);
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    window.confirm("Are you sure you want to delete me?");
    setTodos(newTodos);
  };

  const addTodo = (title, text, date) => {
    const newTodos = [...todos, {}];
    newTodos.slice(-1)[0].text = text;
    newTodos.slice(-1)[0].date = date;
    newTodos.slice(-1)[0].title = title;
    setTodos(newTodos);
  };

  const editNote = (title, text, index) => {
    const newTodos = [...todos];
    newTodos[index].title = title;
    newTodos[index].text = text;
    newTodos[index].date = "EDITED ON " + new Date().toLocaleString();
  };

  return (
    <div className="row app">
      <h1 className="header">Leave a Note!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="row bigForm">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            editNote={editNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
