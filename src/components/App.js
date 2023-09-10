import React, { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Function to add a new item to the list
  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  // Filter items based on search and category
  const filteredItems = items.filter((item) => {
    if (category === "All" || item.category === category) {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }
    return false;
  });

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <Filter
        search={search}
        category={category}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
