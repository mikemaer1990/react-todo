import React from "react";
import Todos from "./Todos";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="mt-10">
      <ul>
        {/* Map over each todo in todos */}
        {todos.map((todo) => (
          // Pass in the key(id) / individual todo item(todo) / setTodo function(setTodos) / and list of todos(todo)
          <Todos key={todo.id} data={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
}
