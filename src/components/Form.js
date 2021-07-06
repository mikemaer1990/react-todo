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
  const handleClick = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    setTodos([...todos, { text: inputText, done: false, id: uuidv4() }]);
    setInputText("");
  };
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const handleSelect = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <div className="relative md:w-1/2 w-2/3 mx-auto flex">
        <input
          value={inputText}
          onChange={handleInput}
          className="focus:border-indigo-700 flex items-center focus:bg-indigo-100 rounded w-full pr-10"
          type="text"
          name="todo"
          id="todo"
          autoComplete="off"
        />
        <button onClick={handleClick} type="submit">
          <HiOutlinePlusCircle className="text-blue-900 add-button w-9 h-9 inline hover:text-indigo-500 transition-all absolute inset-y-0 right-40" />
        </button>
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
