import React from "react";

export default function Todo(props) {
  const { title, desc } = props.todo;

  const deleteHandleTodo = () => {
    props.onTodosId(props.id);
  };

  return (
    <article>
      <div className="todos">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <button onClick={deleteHandleTodo}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
}
