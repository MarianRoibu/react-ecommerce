import React, { useState, useEffect } from 'react';


function Wishlist() {
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

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
    };

    const data = JSON.parse(localStorage.getItem('wishlist')) || [];

    const updatedItems = [...data, newItem];

    localStorage.setItem('wishlist', JSON.stringify(updatedItems));

    setItems(updatedItems);

    event.target.reset();
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    setItems(storedItems);
  }, []);

  return (
    <div>
      <h2>Lista de deseos</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Eliminate</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" required />

        <label htmlFor="price">Precio:</label>
        <input type="number" id="price" name="price" step="0.01" required />

        <button type="submit">Agregar a la lista de deseos</button>
      </form>
    </div>
  );
}

export default Wishlist;

