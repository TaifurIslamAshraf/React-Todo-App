import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.newTodo}
          id={todo.id}
          onTodosId={props.onTodosId}
        />
      ))}
    </div>
  );
}
