/* eslint-disable default-case */
import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // State mgmt
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [sortedTodos, setSortedTodos] = useState([]);

  const handleFilter = () => {
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
  };

  // const setLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let localTodos = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(localTodos);
  //   }
  // };
  // useEffect(() => {
  //   setLocalTodos();
  // }, []);
  useEffect(() => {
    handleFilter();
    // getLocalTodos();
  }, [todos, status]);
  // Return app
  return (
    <div className="w-screen h-screen bg-gray-800 pt-24">
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
