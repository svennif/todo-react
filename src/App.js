import React, { useState, useEffect } from "react";
import { BsXCircleFill } from "react-icons/bs";

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
      <h1 className="todo__title">My to-do list</h1>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <input className="todo__checkbox" type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />
          <div className={`todo__text ${todo.completed ? "completed" : ""}`}>{todo.text}</div>
          <button className="todo__btn" onClick={() => deleteTask(todo.id)}>
            <i>
              <BsXCircleFill className="todo__btn__icon" />
            </i>
          </button>
        </div>
      ))}
      <form className="todo__form" onSubmit={handleSubmit}>
        <button className="todo__form__btn" type="submit"></button>
        <input className="todo__form__input" type="text" placeholder="Add task" onChange={(e) => setTodo(e.target.value)} value={todo} />
      </form>
    </div>
  );
}

export default App;
