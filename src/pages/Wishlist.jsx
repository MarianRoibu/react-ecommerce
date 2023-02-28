import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Wishlist() {
  const [items, setItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    localStorage.setItem('wishlist', JSON.stringify(updatedItems));

    setItems(updatedItems);
  };

  const handleCheckboxChange = (id) => {
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

    setItems(updatedItems);
  };

  const handleSubmit = (event) => {
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



  const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;



const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

const Label = styled.label`
margin-bottom: 5px;
`;

const Input = styled.input`
margin-bottom: 10px;
`;

const TextArea = styled.textarea`
margin-bottom: 10px;
`;

const Select = styled.select`
margin-bottom: 10px;
`;

const Button = styled.button`
margin-bottom: 10px;
`;

const Filters = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

const FiltersTitle = styled.h3`
margin-bottom: 5px;
`;

const FilterContainer = styled.div`
margin-bottom: 10px;
`;

const FilterLabel = styled.label`
margin-right: 5px;
`;

const CheckboxInput = styled.input`
margin-right: 5px;
`;

const ListContainer = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

const ListTitle = styled.h2`
margin-bottom: 10px;
`;

const ListFilters = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
`;

const ListItem = styled.li`
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: center;
`;

const ItemName = styled.h3`
margin-bottom: 5px;
`;

const ItemDescription = styled.p`
margin-bottom: 5px;
`;

const ItemPrice = styled.p`
margin-bottom: 5px;
`;

const ItemCheckbox = styled.input`
margin-right: 5px;
`;

const ItemDeleteButton = styled.button``;


const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  button {
    margin-right: 0.5rem;
    padding: 0.5rem;
    background-color: #1abc9c;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #148f77;
    }
  }
`;



  return (
<Main>
    <ListTitle>Lista de deseos</ListTitle>
    <Form onSubmit={handleSubmit}>
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
      </FilterContainer>
    </Filters>

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
              <h3 onDoubleClick={() => {
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
              <p onDoubleClick={() => {
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
              <p onDoubleClick={() => {
                setEditingItemId(item.id);
                setEditName(item.name);
                setEditDescription(item.description);
                setEditPrice(item.price);
              }}>${item.price}</p>
            )}{editingItemId === item.id && (
              <Button onClick={() => {
                handleEditItem(editingItemId, editName, editDescription, editPrice);
                setEditingItemId(null);
              }}>Guardar cambios</Button>
            )}


            
              <ItemCheckbox
                type="checkbox"
                checked={!item.active}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <ItemDeleteButton onClick={() => handleDelete(item.id)}>Eliminar</ItemDeleteButton>
            </ListItem>
          ))}
      </ul>
    </ListContainer>
  </Main>
  );

  
  
}

export default Wishlist;




