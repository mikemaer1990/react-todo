import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

export default function Todos({ data, todos, setTodos }) {
  // Function to update 'done' status of item
  const handleComplete = (e) => {
    // Update the state of our 'todos'
    setTodos(
      // Map over 'todos'
      todos.map((item) => {
        // If the clicked item matches the current mapped item -> update the 'done' status / else return the item as is
        return item.id === data.id ? { ...item, done: !item.done } : item;
      })
    );
  };
  // Filter OUT the item that matches the current clicked item id
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== data.id));
  };
  // Return the Todo item component
  return (
    <div
      // If done -> line through and grey text
      className={`${
        data.done ? "text-gray-400 line-through " : ""
      }bg-indigo-50 rounded flex mt-1 w-1/3 mx-auto transition`}
    >
      <li className="w-max p-2 truncate">{data.text}</li>
      {/* Complete button */}
      <button
        onClick={handleComplete}
        className="bg-green-500 hover:bg-green-400 ml-auto"
      >
        <GiCheckMark className="w-5 h-5 text-white mx-2" />
      </button>
      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="bg-red-600 rounded-r-sm hover:bg-red-500"
      >
        <AiFillDelete className="w-5 h-5 text-white mx-2" />
      </button>
    </div>
  );
}
