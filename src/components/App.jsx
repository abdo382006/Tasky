// React JSX Components
import Header from "./Header";
import MainContenct from "./MainContent";
// React Hooks & Methods
import { useState, useEffect, createContext } from "react";
// Custom Hooks
import useLocalStorage from "../hooks/useLocalStorage";
// Create The Contexts
export const TodosContext = createContext();
export const SearchContext = createContext();

export default function App() {
  const [todos, setTodos] = useState([]);
  const { getItem } = useLocalStorage("todos");
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTodos(getItem() || []);
  }, []);

  return (
    <main className="tasky-app">
      <div className="container">
        <TodosContext.Provider value={{ todos, setTodos, filter, setFilter }}>
          <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            <Header />
            <MainContenct />
          </SearchContext.Provider>
        </TodosContext.Provider>
      </div>
    </main>
  );
}
