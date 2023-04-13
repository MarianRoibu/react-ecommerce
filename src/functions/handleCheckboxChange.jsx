const handleCheckboxChange = (items, id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      } else {
        return item;
      }
    });
  
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
  
    return updatedItems;
  };
  
  module.exports = handleCheckboxChange;