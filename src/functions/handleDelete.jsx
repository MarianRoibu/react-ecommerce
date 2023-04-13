const handleDelete = (items, id) => {
    const updatedItems = items.filter((item) => item.id !== id);
  
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
  
    return updatedItems;
  };
  
  module.exports = handleDelete;