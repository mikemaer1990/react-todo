import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

export default function Todos({ data, todos, setTodos }) {
  const handleComplete = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== data.id));
  };

  return (
    <div
      className={`${
        data.done ? "text-gray-400 line-through " : ""
      }bg-indigo-50 rounded flex mt-1 w-1/3 mx-auto transition`}
    >
      <li className="w-max p-2 truncate">{data.text}</li>
      <button
        onClick={handleComplete}
        className="bg-green-500 hover:bg-green-400 ml-auto"
      >
        <GiCheckMark className="w-5 h-5 text-white mx-2" />
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-600 rounded-r-sm hover:bg-red-500"
      >
        <AiFillDelete className="w-5 h-5 text-white mx-2" />
      </button>
    </div>
  );
}
