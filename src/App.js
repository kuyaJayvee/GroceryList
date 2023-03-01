import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
  const [addItem, setAddItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addToList = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const listItem = [...items, newItem];
    setItems(listItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!addItem) return;
    addToList(addItem);
    setAddItem("");
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <div className="App">
      <Header />
      <div className="forms">
        <AddItem
          handleSubmit={handleSubmit}
          addItem={addItem}
          setAddItem={setAddItem}
        />
        <SearchItem search={search} setSearch={setSearch} />
      </div>
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default App;
