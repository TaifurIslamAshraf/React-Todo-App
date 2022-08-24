import React, { useState } from "react";

export default function NewTodos(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleTodoChange = (e) => {
    const fildName = e.target.name;
    setTodo({ ...todo, [fildName]: e.target.value });
  };

  const handleSubmitTodo = (e) => {
    props.onNewTodo(todo);
    e.preventDefault();
    setTodo({
      title: "",
      desc: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Todo App</h1>
      <form action="">
        <div className="title__div">
          <label htmlFor="title">Title</label>
          <br />
          <input
            onChange={handleTodoChange}
            type="text"
            name="title"
            id="title"
            required
            value={title}
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="desc__div">
          <label htmlFor="desc">Message</label>
          <br />
          <textarea
            onChange={handleTodoChange}
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            required
            value={desc}
            placeholder="Type Your Message"></textarea>
        </div>
        <div className="btn" onClick={handleSubmitTodo}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
