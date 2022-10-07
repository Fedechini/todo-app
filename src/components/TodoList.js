import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todos);
  };

  return (
    <>
      <h2>What's the plan today?</h2>
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default TodoList;
