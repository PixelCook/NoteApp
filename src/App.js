import "./App.css";

function App() {
  return (
    <div className="App">
      <textarea
        className="bigForm"
        type="textarea"
        name="textValue"
        rows={5}
        cols={5}
      ></textarea>
      <button>Add</button>
    </div>
  );
}

export default App;
