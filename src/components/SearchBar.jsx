// React Hooks
import { useContext } from "react";
// The Search Context
import { SearchContext } from "./App";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  return (
    <input
      className="search-bar"
      placeholder="Search todo..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
