import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoOptions from "./TodoOptions";
import { FiDelete, FiEdit } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Todo({
  todos,
  FILTER_MAP,
  filter,
  completeTodo,
  removeTodo,
  updateTodo,
  clearCompleted,
  filterList,
  handleOnDragEnd,
}) {
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
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos-container">
          {(provided) => (
            <ul
              className="todos-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.filter(FILTER_MAP[filter]).map((todo, i) => {
                return (
                  <Draggable
                    key={todo.id.toString()}
                    draggableId={todo.id.toString()}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        className={todo.isDone ? "todo__el done" : "todo__el"}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div
                          className={
                            todo.isDone ? "icon-check checked" : "icon-check"
                          }
                          onClick={() => completeTodo(todo.id)}
                        >
                          {todo.isDone ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="9"
                            >
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

                        <p>{todo.text}</p>

                        <div className="todo_el-icons">
                          <FiDelete
                            className="icon-delete"
                            onClick={() => removeTodo(todo.id)}
                          />
                          <FiEdit
                            className="icon-edit"
                            onClick={() =>
                              setTodoToEdit({ id: todo.id, value: todo.text })
                            }
                          />
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <TodoOptions
        todos={todos}
        clearCompleted={clearCompleted}
        filterList={filterList}
      />
    </>
  );
}

export default Todo;
