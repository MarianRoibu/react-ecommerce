const handleEditFieldChange = (id, field, value, setEditName, setEditDescription, setEditPrice) => {
    if (field === "name") {
      setEditName(value);
    } else if (field === "description") {
      setEditDescription(value);
    } else if (field === "price") {
      setEditPrice(value);
    }
  };
  
  export default handleEditFieldChange;
  