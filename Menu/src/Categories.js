import React, { useState } from 'react';

const Categories = ({filterItems, categories}) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const handleClick = (category) =>{
    filterItems(category);
    setActiveCategory(category);
  }
  return <div className='btn-container'>
    {categories.map((category, i) => (
      <button type="button" key={i} className={activeCategory === category ? "filter-btn active" : "filter-btn"} onClick={() => handleClick(category)}>{category}</button>
    ))}
  </div>;
};

export default Categories;
