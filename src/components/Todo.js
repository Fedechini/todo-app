import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { BsCircle } from "react-icons/bs";
import { FiDelete, FiEdit } from "react-icons/fi";

function Todo({ todos, doneTodo, removeTodo, updateTodo }) {
  const [todoToEdit, setTodoToEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (updatedTodo) => {
    updateTodo(todoToEdit.id, updatedTodo);

    setTodoToEdit({
      id: null,
      value: "",
    });
  };

  if (todoToEdit.id) {
    return <TodoForm todoToEdit={todoToEdit} addTodo={submitUpdate} />;
  }

  return todos.map((todo, i) => (
    <div className={todo.isDone ? "todo__el done" : "todo__el"} key={i}>
      <BsCircle className="icon-check" onClick={() => doneTodo(todo.id)} />
      <p key={todo.id}>{todo.text}</p>
      <FiDelete className="icon-delete" onClick={() => removeTodo(todo.id)} />
      <FiEdit
        className="icon-edit"
        onClick={() => setTodoToEdit({ id: todo.id, value: todo.text })}
      />
    </div>
  ));
}

export default Todo;
