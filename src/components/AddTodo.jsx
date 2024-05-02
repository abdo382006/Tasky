// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// Todos Context
import { TodosContext } from "./App";
// React Hooks
import { useState, useContext } from "react";
// Custom Hooks
import useLocalStorage from "../hooks/useLocalStorage";
// Random Id Generator
import { v4 as uuidv4 } from "uuid";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, setTodos } = useContext(TodosContext);
  const { storeItem } = useLocalStorage("todos");

  function addNewTodo(e) {
    // Prevent The Form From Submittion
    e.preventDefault();
    // Check if the add todo input value isn't empty
    if (newTodo !== "") {
      // Get The Updated Todos List
      const updatedTodos = [
        ...todos,
        {
          id: uuidv4(),
          content: newTodo,
          completed: false,
        },
      ];
      // Update The Todos List
      setTodos(updatedTodos);
      // Store The Todos
      storeItem(updatedTodos);
      // Empty The Add Todo Input's Value
      setNewTodo("");
    }
  }

  return (
    <form className="add-new-todo" onSubmit={addNewTodo}>
      <input
        placeholder="Add todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="main-btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
