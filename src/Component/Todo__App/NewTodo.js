import React, { useState } from "react";

export default function NewTodo(props) {
  const [value, setValue] = useState({ title: "", desc: "" });
  const { title, desc } = value;

  const onChangeHandler = (e) => {
    const name = e.target.name;
    setValue((prevValue) => {
      return { ...prevValue, [name]: e.target.value };
    });
  };

  const submitDataHandler = (e) => {
    e.preventDefault();
    props.OnNewTodo(value);
    setValue({ title: "", desc: "" });
  };

  return (
    <div className="form-container">
      <h1>Todo App</h1>
      <form action="" onSubmit={submitDataHandler}>
        <div className="title__div">
          <label htmlFor="title">Title</label>
          <br />
          <input
            onChange={onChangeHandler}
            type="text"
            name="title"
            id="title"
            value={title}
            required
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="desc__div">
          <label htmlFor="desc">Message</label>
          <br />
          <textarea
            onChange={onChangeHandler}
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            value={desc}
            required
            placeholder="Type Your Message"
          ></textarea>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
