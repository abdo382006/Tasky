// React JSX Components
import TodoItem from "./TodoItem";
// Contexts
import { TodosContext, SearchContext } from "./App";
// React Hooks
import { useContext } from "react";

export default function TodosList() {
  const { todos, filter } = useContext(TodosContext);
  const { searchQuery } = useContext(SearchContext);

  return (
    <ul className="todos-list">
      <li className="no-tasks-alert">No tasks to show!</li>
      {todos.length > 0 &&
        todos
          .filter((todo) => {
            if (filter === "All") {
              return todo;
            } else if (filter === "Pending") {
              return todo.completed === false;
            } else if (filter === "Completed") {
              return todo.completed === true;
            }
          })
          .filter((todo) =>
            todo.content.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                content={todo.content}
                isCompleted={todo.completed}
              />
            );
          })}
    </ul>
  );
}
