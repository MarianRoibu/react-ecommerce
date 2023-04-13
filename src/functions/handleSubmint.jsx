const handleSubmit = (event, items, setItems) => {
    event.preventDefault();
  
    const newItem = {
      id: Date.now(),
      name: event.target.name.value,
      description: event.target.description.value,
      price: parseFloat(event.target.price.value),
      category: event.target.category.value,
      active: true,
    };
  
    const data = JSON.parse(localStorage.getItem('wishlist')) || [];
  
    const updatedItems = [...data, newItem];
  
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
  
    setItems(updatedItems);
  
    event.target.reset();
  };
  
  module.exports = handleSubmit;