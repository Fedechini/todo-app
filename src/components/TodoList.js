import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    console.log(todos);
    setTodos(newTodos);
  };

  const doneTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (id, updatedTodo) => {
    if (!updatedTodo.text || /^\s*$/.test(updatedTodo.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === id ? updatedTodo : item))
    );
  };

  return (
    <>
      <h2>Todo list challenge</h2>
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
