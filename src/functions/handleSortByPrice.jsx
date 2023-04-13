const handleSortByPrice = (order, setSortByPrice) => {
    if (order === "asc") {
      setSortByPrice("asc");
    } else if (order === "desc") {
      setSortByPrice("desc");
    } else {
      setSortByPrice("none");
    }
  };
  
  export default handleSortByPrice;
  