/* eslint-disable default-case */
import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import SetDarkMode from "./components/SetDarkMode";
import DarkModeButton from "./components/DarkModeButton";
function App() {
  SetDarkMode();
  // State mgmt
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [sortedTodos, setSortedTodos] = useState([]);

  // Sort todos based on filter input
  useEffect(
    function handleFilter() {
      switch (status) {
        case "complete":
          setSortedTodos(todos.filter((item) => item.done === true));
          break;
        case "uncomplete":
          setSortedTodos(todos.filter((item) => item.done === false));
          break;
        default:
          setSortedTodos(todos);
          break;
      }
    },
    [setSortedTodos, todos, status]
  );
  // Get localstorage todos if available
  const getLocalTodos = () => {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };
  // Run once on launch
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Update localStorage todos when 'todos' is changed
  useEffect(
    function setLocalTodos() {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );
  // Return app
  return (
    <div className="w-screen h-screen dark:bg-gray-800 bg-indigo-50 pt-24 transition duration-1000">
      <DarkModeButton />
      {/* Display the form */}
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      {/* Display the todo list */}
      <TodoList todos={sortedTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
