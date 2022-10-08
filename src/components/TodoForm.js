import React, { useState, useEffect, useRef } from "react";
import nextId from "react-id-generator";

function TodoForm(props) {
  const [input, setInput] = useState(
    props.todoToEdit ? props.todoToEdit.value : ""
  );

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo({
      id: `${props.todoToEdit ? props.todoToEdit.id : nextId()}`,
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.todoToEdit ? "Update todo" : "Create a new todo..."}
        name="todo"
        className="todo__form-input"
        value={input}
        onChange={handleChange}
        ref={inputFocus}
      />
      {/* <button className="todo-button">
        {props.todoToEdit ? "Update" : "Add Todo"}
      </button> */}
    </form>
  );
}

export default TodoForm;
