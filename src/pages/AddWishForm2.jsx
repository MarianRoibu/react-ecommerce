import { useState } from "react";

function AddWishForm({ onAddWish }) {
    const [newWish, setNewWish] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (newWish) {
        onAddWish({ id: Date.now(), text: newWish, completed: false });
        setNewWish("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new wish"
          value={newWish}
          onChange={(event) => setNewWish(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    );
  }

export default AddWishForm;