export default function useLocalStorage(key) {
  function getItem() {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  }

  function storeItem(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function deleteItem() {
    localStorage.removeItem(key);
  }

  return { getItem, storeItem, deleteItem };
}
