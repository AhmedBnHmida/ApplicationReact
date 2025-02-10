import React, { useState } from "react";

const ListManager = ({ 
  initialItems = [], 
  placeholder = "Ajouter un nouvel élément..." 
}) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem(""); // Réinitialiser le champ
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>Liste</h1>
      <input
        type="text"
        placeholder={placeholder}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Ajouter</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager;
