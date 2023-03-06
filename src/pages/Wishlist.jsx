import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';


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
  const [isOpen, setIsOpen] = useState(false);



  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


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
    closeModal();
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



  const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
`;

const Form = styled.form`
 position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 20%;
  right: 20%;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #148f77;
  }
`;

const ButtonEdit = styled.button`
  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  background-color: #fcff82;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #facf5a;
  }
`;

const Filters = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const FiltersTitle = styled.h3`
  margin-bottom: 1rem;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  margin-bottom: 1rem;
`;

const FilterLabel = styled.label`
  margin-right: 0.5rem;
`;

const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`;

const ListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;

  @media screen and (max-width: 768px) {
width: 80%;
}
`;

const ListTitle = styled.h2 `margin-bottom: 1rem; font-weight: bold;;`

const ListItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
background-color: #fff;
border-radius: 5px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
width: 20rem;
margin-bottom: 1rem;

&:last-child {
margin-bottom: 0;
}
`;

const ItemTitle = styled.h3 `
margin-bottom: 0.5rem;;`

const ItemDescription = styled.p `
margin-bottom: 0.5rem;;`

const ItemDetails = styled.div `
display: flex; 
flex-direction: row; 
justify-content: space-between; 
width: 100%;;`

const ItemCategory = styled.span `
margin-right: 0.5rem; 
font-weight: bold;;`

const ItemDate = styled.span `
font-size: 0.8rem; 
color: #888;;`

const ErrorText = styled.p `
color: #ff0000; 
font-weight: bold; 
margin-top: 0.5rem;;`

const LoadingText = styled.p `
font-weight: bold; 
margin-top: 0.5rem;;`


const ListFilters = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
`;

const ItemCheckbox = styled.input`
margin-right: 5px;
`;

const ItemDeleteButton = styled.button`
      margin-right: 0.5rem;
    padding: 0.5rem;
    background-color: #f83e4b;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #be3144;
    }

`;


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
    <Button onClick={openModal}>Agregar a la lista de deseos</Button>

    <Modal isOpen={isOpen}>
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

    <Button  type="submit" >Agregar a la lista de deseos</Button>
  </Form>
</Modal>


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




