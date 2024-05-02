// React JSX Components
import AddTodo from "./AddTodo";
import SearchBar from "./SearchBar";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// React Hooks
import { useContext } from "react";
// Todos Context
import { TodosContext } from "./App";
// Custom Hooks
import useLocalStorage from "../hooks/useLocalStorage";

export default function Header() {
  const { filter, setFilter, todos, setTodos } = useContext(TodosContext);
  const { storeItem } = useLocalStorage("todos");

  function markAllTasksAsCompleted() {
    // Make All Todos Completed
    const updatedTodos = [...todos].map((todo) => {
      return { ...todo, completed: true };
    });
    // Update The Todos State
    setTodos(updatedTodos);
    // Store The Updated Todos
    storeItem(updatedTodos);
  }

  return (
    <header>
      <h3 className="logo">Tasky</h3>
      <AddTodo />
      <div className="row">
        <div className="options">
          <div className="select-box">
            <span className="icon">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>All</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          <button className="main-btn" onClick={markAllTasksAsCompleted}>
            Make All Completed
          </button>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}
