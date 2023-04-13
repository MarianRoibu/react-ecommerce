const deleteAllItems = (localStorage, setItems) => {
    localStorage.clear();
    setItems([]);
  };
  
  export default deleteAllItems;
  