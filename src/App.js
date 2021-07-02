import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App flex flex-wrap items-center justify-center w-screen h-screen bg-gray-800">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos />
    </div>
  );
}

export default App;
