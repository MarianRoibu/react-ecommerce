const handleEditItem = (id, name, description, price, items, setItems, localStorage) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name,
          description,
          price: parseFloat(price)
        };
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };
  
  export default handleEditItem;
  