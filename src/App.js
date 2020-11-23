import React from "react";
import "./App.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
function Todo({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      {todo.text}
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
  const [todos, setTodos] = React.useState([{ text: "Always leave a Note!" }]);

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Please Leave a Note!</h1>
      <div className="bigForm">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
