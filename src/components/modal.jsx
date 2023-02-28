import React from "react";
import Wishlist from "../pages/Wishlist";

function modal () {

    return (
        <form onSubmit={handleEditModal}>
  <label htmlFor="name">Nombre:</label>
  <input type="text" id="name" name="name" defaultValue={editingItem.name} required />

  <label htmlFor="description">Descripción:</label>
  <textarea id="description" name="description" defaultValue={editingItem.description} required />

  <label htmlFor="price">Precio:</label>
  <input type="number" id="price" name="price" step="0.01" defaultValue={editingItem.price} required />

  <button type="submit">Guardar cambios</button>
</form>

    );
}
