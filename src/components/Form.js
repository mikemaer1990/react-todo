import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, done: false, id: uuidv4() },
    ]);
    props.setInputText("");
  };
  const handleInput = (e) => {
    props.setInputText(e.target.value);
  };
  return (
    <form>
      <div className="relative">
        <input
          value={props.inputText}
          onChange={handleInput}
          className="focus:border-indigo-700 flex items-center focus:bg-indigo-100 pr-10"
          type="text"
          name="todo"
          id="todo"
        />
        <button onClick={handleClick} type="submit">
          <HiOutlinePlusCircle className="text-blue-900 add-button w-9 h-9 inline hover:text-indigo-500 transition-all absolute inset-y-0 right-0" />
        </button>
      </div>
    </form>
  );
}
