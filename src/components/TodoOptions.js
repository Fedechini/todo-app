import React from "react";

function TodoOptions({ todos, clearCompleted, filterList }) {
  return (
    <div className="todo-options">
      <p className="items-left">
        {todos.filter((todo) => todo.isDone !== true).length} items left
      </p>
      <div className="filter-btns">{filterList}</div>
      <button className="btn-options clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoOptions;
