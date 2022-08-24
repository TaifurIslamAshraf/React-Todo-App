import React from "react";

export default function Todo(props) {
  const { title, desc } = props.todo.todos;

  const handleDeleteTodo = () => {
    props.onTodoId(props.todo.id);
  };

  return (
    <article>
      <div className="todos">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <button onClick={handleDeleteTodo}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
}
