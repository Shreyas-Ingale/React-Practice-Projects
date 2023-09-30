import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const list = ["all", ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(list);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    let newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return <main className='menu section'>
    <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
    </div>
    <Categories filterItems={filterItems} categories={categories} />
    <Menu items={menuItems} />
  </main>;
}

export default App;
