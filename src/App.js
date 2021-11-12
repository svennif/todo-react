import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  // Get localstorage
  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  // Set localstorage
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Math.random() * 1000,
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTask(id) {
    const updatedTodo = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodo);
  }

  function toggleComplete(id) {
    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedtodos);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={() => deleteTask(todo.id)}>Delete</button>
          <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />
        </div>
      ))}
    </div>
  );
}

export default App;
