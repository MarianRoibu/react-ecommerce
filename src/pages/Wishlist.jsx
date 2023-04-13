import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import handleCheckboxChange from '../functions/handleCheckboxChange';
import handleDelete from '../functions/handleDelete';
import handleSubmit from '../functions/handleSubmint';
import { Main, Form, Label, Input, TextArea, Select, Button, ButtonEdit, 
  Filters, FiltersTitle, FilterContainer, FilterLabel, CheckboxInput, 
  ListContainer, ListTitle, ListItem, ItemTitle, ItemDescription, ItemDetails, 
  ItemCategory, ItemDate, ErrorText, LoadingText, ListFilters, ItemCheckbox, 
  ItemDeleteButton, ButtonContainer}from '../style/whislistStyle';
import Filter from '../components/filters';
import WishesList from './WishesList';

import axios from 'axios';
import AddWishForm from './AddWishForm';

function Wishlist() {
  const [items, setItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState("none");



  // const [wishes, setWishes] = useState([]);

  // // fetch wishes data from API
  // useEffect(() => {
  //   axios.get('http://localhost:4000/wishes')
  //     .then(res => {
  //       setWishes(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // // delete a wish
  // const handleDelete = id => {
  //   axios.delete(`http://localhost:4000/wishes/${id}`)
  //     .then(res => {
  //       setWishes(wishes.filter(wish => wish._id !== id));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }




  const handleDeleteItem = (id) => {
    const updatedItems = handleDelete(items, id);

    setItems(updatedItems);
  };

  const handleCheckboxChangeItem = (id) => {
    const updatedItems = handleCheckboxChange(items, id);

    setItems(updatedItems);
  };

  const handleSubmitItem = (event) => {
    handleSubmit(event, items, setItems);
  };


  const showCompletedItems = () => {
    setShowCompleted(true);
  };

  const showActiveItems = () => {
    
    setShowCompleted(false);
  };

  const deleteAllItems = () => {
    localStorage.clear();
    setItems([]);
  };

  const handleSortByPrice = (order) => {
    if (order === "asc") {
      setSortByPrice("asc");
    } else if (order === "desc") {
      setSortByPrice("desc");
    } else {
      setSortByPrice("none");
    }
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortByPrice === "asc") {
      return a.price - b.price;
    } else if (sortByPrice === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });


  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };
  const handleEditFieldChange = (id, field, value) => {
    if (field === "name") {
      setEditName(value);
    } else if (field === "description") {
      setEditDescription(value);
    } else if (field === "price") {
      setEditPrice(value);
    }
  };


  const handleEditItem = (id, name, description, price) => {
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
  


  const filteredItems = items
    .filter((item) => (showCompleted ? true : item.active))
    .filter((item) => (categoryFilter ? item.category === categoryFilter : true))
    .filter((item) => (priceFilter ? item.price <= parseFloat(priceFilter) : true));

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    setItems(storedItems);
  }, []);


  return (
<Main>
    <ListTitle>Lista de deseos</ListTitle>
    <Form onSubmit={handleSubmitItem}>
      <Label htmlFor="name">Nombre:</Label>
      <Input type="text" id="name" name="name" required />

      <Label htmlFor="description">Descripción:</Label>
      <TextArea id="description" name="description" required />

      <Label htmlFor="price">Precio:</Label>
      <Input type="number" id="price" name="price" step="0.01" required />

      <Label htmlFor="category">Categoría:</Label>
      <Select id="category" name="category" required>
        <option value="">Selecciona una categoría</option>
        <option value="electrónica">Electrónica</option>
        <option value="ropa">Ropa</option>
        <option value="hogar">Hogar</option>
      </Select>

      <Button type="submit">Agregar a la lista de deseos</Button>
    </Form>

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

{/* <Filter /> */}


    <ButtonContainer>
      <Button onClick={showCompletedItems}>Completados</Button>
      <Button onClick={showActiveItems}>Activos</Button>
      <Button onClick={deleteAllItems}>Borrar todo</Button>
    </ButtonContainer>

    <ListContainer>
      <ListTitle>Lista de deseos</ListTitle>
      <ListFilters>
        <FilterLabel htmlFor="showCompleted">Mostrar completados:</FilterLabel>
        <CheckboxInput
          type="checkbox"
          id="showCompleted"
          name="showCompleted"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
      </ListFilters>
      <ul>
        {items
          .filter((item) => (showCompleted ? true : item.active))
          .filter((item) => (categoryFilter ? item.category === categoryFilter : true))
          .filter((item) => (priceFilter ? item.price <= priceFilter : true))
          .map((item) => (
            <ListItem key={item.id}>{editingItemId === item.id ? (
              <Input
                type="text"
                value={editName}
                onChange={(e) => handleEditFieldChange(item.id, "name", e.target.value)}
              />
            ) : (
              <h3 onClick={() => {
                setEditingItemId(item.id);
                setEditName(item.name);
                setEditDescription(item.description);
                setEditPrice(item.price);
              }}>{item.name}</h3>
            )}
            
            {editingItemId === item.id ? (
              <TextArea
                value={editDescription}
                onChange={(e) =>
                  handleEditFieldChange(item.id, "description", e.target.value)
                }
              />
            ) : (
              <p onClick={() => {
                setEditingItemId(item.id);
                setEditName(item.name);
                setEditDescription(item.description);
                setEditPrice(item.price);
              }}>{item.description}</p>
            )}
            
            {editingItemId === item.id ? (
              <Input
                type="number"
                step="0.01"
                value={editPrice}
                onChange={(e) => handleEditFieldChange(item.id, "price", e.target.value)}
              />
            ) : (
              <p onClick={() => {
                setEditingItemId(item.id);
                setEditName(item.name);
                setEditDescription(item.description);
                setEditPrice(item.price);
              }}>${item.price}</p>
            )}{editingItemId === item.id && (
              <ButtonEdit onClick={() => {
                handleEditItem(editingItemId, editName, editDescription, editPrice);
                setEditingItemId(null);
              }}>Guardar cambios</ButtonEdit>
            )}


            
              <ItemCheckbox
                type="checkbox"
                checked={!item.active}
                onChange={() => handleCheckboxChangeItem(item.id)}
              />
              <ItemDeleteButton onClick={() => handleDeleteItem(item.id)}>Eliminar</ItemDeleteButton>
            </ListItem>
          ))}
      </ul>


      {/* <WishesList wishes={wishes} onDelete={handleDelete}  /> */}
      <WishesList />

    </ListContainer>
  </Main>
  );

  
  
}

export default Wishlist;




