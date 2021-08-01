import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  // Click handler
  const handleClick = (e) => {
    // Prevent 'submitting'
    e.preventDefault();
    // Do nothing if no input
    if (inputText === "") return;
    // Else set the todos based on input text -> generate uuid
    setTodos([...todos, { text: inputText, done: false, id: uuidv4() }]);
    // Reset the input text
    setInputText("");
  };
  // Update inputText prop
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  // Update filter status prop
  const handleSelect = (e) => {
    setStatus(e.target.value);
  };
  // Return form component
  return (
    <form>
      <div className="relative lg:w-1/2 w-10/12 mx-auto flex">
        {/* Main input area */}
        <input
          value={inputText}
          onChange={handleInput}
          className="focus:border-indigo-700 flex items-center focus:bg-indigo-100 rounded w-full pr-10 "
          type="text"
          name="todo"
          id="todo"
          autoComplete="off"
        />
        {/* Button to add item */}
        <button onClick={handleClick} type="submit">
          <HiOutlinePlusCircle className="text-blue-900 add-button w-9 h-9 inline hover:text-indigo-500 transition-all absolute inset-y-0 right-40" />
        </button>
        {/* Select to filter items */}
        <select
          onChange={handleSelect}
          className="focus:border-indigo-700 flex items-center focus:bg-indigo-100 rounded-r"
          name="sort"
          id="sort"
        >
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="uncomplete">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
