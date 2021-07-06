import React from "react";
import Todos from "./Todos";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="mt-10">
      <ul>
        {todos.map((todo) => (
          <Todos key={todo.id} data={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
}
