import React, { useState } from "react";
import "../Todos__App/todos.modiul.css";
import { v4 as uuidv4 } from "uuid";

import NewTodos from "./NewTodos";
import Todos from "./Todos";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const Todohandle = (todos) => {
    setTodos((oldTodo) => {
      return [...oldTodo, { id: uuidv4(), todos }];
    });
  };

  const handleTodoId = (todoId) => {
    setTodos((oldTodo) => {
      const filterTodo = oldTodo.filter((todo) => todo.id !== todoId);
      return filterTodo;
    });
  };

  return (
    <div>
      <div>
        <NewTodos onNewTodo={Todohandle} />
      </div>
      <div className="todos-container">
        <Todos todos={todos} onTodoId={handleTodoId} />
      </div>
    </div>
  );
}
