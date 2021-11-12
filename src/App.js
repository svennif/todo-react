import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <form>
        <input type="text"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
