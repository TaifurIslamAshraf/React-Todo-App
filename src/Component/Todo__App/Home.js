import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../Todo__App/todo.modul.css";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const HandleNewTodo = (newTodo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), newTodo }];
    });
  };

  const todosId = (id) => {
    setTodos((prevTodo) => {
      const filterData = prevTodo.filter((todo) => todo.id !== id);
      return filterData;
    });
  };

  return (
    <div>
      <div>
        <NewTodo OnNewTodo={HandleNewTodo} />
      </div>
      <div className="todos-container">
        <Todos todos={todos} onTodosId={todosId} />
      </div>
    </div>
  );
}
