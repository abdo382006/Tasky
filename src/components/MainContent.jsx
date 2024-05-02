// React JSX Components
import TodosList from "./TodosList";
// Todos Context
import { TodosContext } from "./App";
// React Hooks
import { useContext } from "react";

export default function MainContenct() {
  const { todos } = useContext(TodosContext);
  const uncompoletedTodosLength = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <section className="main-content">
      <h3>All tasks:-</h3>
      <TodosList />
      <h4 className="todos-num">
        <span>{uncompoletedTodosLength}</span> Task(s) Remains
      </h4>
    </section>
  );
}
