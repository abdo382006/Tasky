// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
// Todos Context
import { TodosContext } from "./App";
// React Hooks
import { useContext, useRef } from "react";
// Custom Hooks
import useLocalStorage from "../hooks/useLocalStorage";

/* eslint-disable react/prop-types */
export default function TodoItem({ id, content, isCompleted }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { storeItem } = useLocalStorage("todos");
  const todoElement = useRef();

  function markTaskAsCompleted(taskId) {
    // Get The Updated Todos List
    const updatedTodos = [...todos].map((todo) => {
      if (taskId == todo.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    // Update The Todos List
    setTodos(updatedTodos);
    // Store The Todos List
    storeItem(updatedTodos);
  }

  function removeTask(taskId) {
    // Remove Animation
    todoElement.current.classList.add("removed");
    // Get The Updated Todos List
    const updatedTodos = [...todos].filter((todo) => todo.id != taskId);
    setTimeout(() => {
      // Update The Todos List
      setTodos(updatedTodos);
      // Store The Todos List
      storeItem(updatedTodos);
    }, 500);
  }

  return (
    <li
      className={isCompleted ? "todo-item completed" : "todo-item"}
      ref={todoElement}
    >
      <p>{content}</p>
      <button onClick={() => markTaskAsCompleted(id)}>
        <FontAwesomeIcon fixedWidth icon={isCompleted ? faXmark : faCheck} />
      </button>
      <button onClick={() => removeTask(id)}>
        <FontAwesomeIcon fixedWidth icon={faTrashCan} />
      </button>
    </li>
  );
}
