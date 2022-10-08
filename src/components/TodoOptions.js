import React from "react";

function TodoOptions({ todos, clearCompleted }) {
  return (
    <div className="todo-options">
      <p className="items-left">
        {todos.filter((todo) => todo.isDone !== true).length} items left
      </p>
      <button className="btn-options options-active">All</button>
      <button className="btn-options">Active</button>
      <button className="btn-options">Completed</button>
      <button className="btn-options clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoOptions;
