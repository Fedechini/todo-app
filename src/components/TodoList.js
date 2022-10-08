import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.isDone,
  Completed: (todo) => todo.isDone,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete JavaScript course", isDone: true },
    { id: 2, text: "Jog around the park 3x" },
    { id: 3, text: "10 minutes meditation" },
    { id: 4, text: "Read for 1 hour" },
    { id: 5, text: "Pick up groceries" },
    { id: 6, text: "Complete Todo App on Frontend Mentor" },
  ]);
  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <button
      key={name}
      name={name}
      className={name === filter ? "btn-options active" : "btn-options"}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  ));

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    console.log(todos);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const completedArr = [...todos].filter((todo) => todo.isDone !== true);

    setTodos(completedArr);
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
    <div className="todo__list">
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        FILTER_MAP={FILTER_MAP}
        filter={filter}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        clearCompleted={clearCompleted}
        filterList={filterList}
      />
      <p className="drag-text">Drag and drop to reorder list</p>
    </div>
  );
}

export default TodoList;
