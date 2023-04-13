import React from "react";
import { Main, Form, Label, Input, TextArea, Select, Button, ButtonEdit, 
    Filters, FiltersTitle, FilterContainer, FilterLabel, CheckboxInput, 
    ListContainer, ListTitle, ListItem, ItemTitle, ItemDescription, ItemDetails, 
    ItemCategory, ItemDate, ErrorText, LoadingText, ListFilters, ItemCheckbox, 
    ItemDeleteButton, ButtonContainer}from '../style/whislistStyle';
import { useState } from "react";    

function Filter() {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [sortByPrice, setSortByPrice] = useState("none");

    const handleSortByPrice = (order) => {
        if (order === "asc") {
          setSortByPrice("asc");
        } else if (order === "desc") {
          setSortByPrice("desc");
        } else {
          setSortByPrice("none");
        }
      };

    const handleCategoryFilterChange = (event) => {
        setCategoryFilter(event.target.value);
      };
    
      const handlePriceFilterChange = (event) => {
        setPriceFilter(event.target.value);
      };


    return(

        <Filters>
        <FiltersTitle>Filtros</FiltersTitle>
        <FilterContainer>
          <FilterLabel htmlFor="categoryFilter">Filtrar por categoría:</FilterLabel>
          <Select
            id="categoryFilter"
            name="categoryFilter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="electrónica">Electrónica</option>
            <option value="ropa">Ropa</option>
            <option value="hogar">Hogar</option>
          </Select>
        </FilterContainer>
  
        <FilterContainer>
        <FilterLabel htmlFor="priceFilter">Filtrar por precio:</FilterLabel>
          <Input
            type="number"
            id="priceFilter"
            name="priceFilter"
            step="0.01"
            value={priceFilter}
            onChange={(e) => setPriceFilter(parseFloat(e.target.value))}
          />
          <Button onClick={() => handleSortByPrice("asc")}>Menor a mayor</Button>
          <Button onClick={() =>  handleSortByPrice("desc")}>Mayor a menor</Button>
        </FilterContainer>
      </Filters>
    )
}

export default Filter;
