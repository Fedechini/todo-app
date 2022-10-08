import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoOptions from "./TodoOptions";
import { FiDelete, FiEdit } from "react-icons/fi";

function Todo({ todos, completeTodo, removeTodo, updateTodo, clearCompleted }) {
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

  return (
    <div className="todos-container">
      {todos.map((todo, i) => (
        <div className={todo.isDone ? "todo__el done" : "todo__el"} key={i}>
          <div
            className={todo.isDone ? "icon-check checked" : "icon-check"}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.isDone ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="2"
                  d="M1 4.304L3.696 7l6-6"
                />
              </svg>
            ) : (
              ""
            )}
          </div>

          <p key={todo.id}>{todo.text}</p>

          <div className="todo_el-icons">
            <FiDelete
              className="icon-delete"
              onClick={() => removeTodo(todo.id)}
            />
            <FiEdit
              className="icon-edit"
              onClick={() => setTodoToEdit({ id: todo.id, value: todo.text })}
            />
          </div>
        </div>
      ))}
      <TodoOptions todos={todos} clearCompleted={clearCompleted} />
    </div>
  );
}

export default Todo;
