import React from "react";
import "./App.css";

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
      <button className="btn btn-outline-info btn-sm">noted</button>
    </form>
  );
}
function Todo({ todo, index, removeTodo }) {
  return (
    <div className="col todo">
      <span className="displayspan">
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
    setTodos(newTodos);
  };

  const addTodo = (title, text, date) => {
    const newTodos = [...todos, { text }];
    newTodos.slice(-1)[0].date = date;
    newTodos.slice(-1)[0].title = title;
    setTodos(newTodos);
  };

  return (
    <div className="row app">
      <h1 className="header">Leave a Note!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="row bigForm">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
