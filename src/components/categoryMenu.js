import React, { useState } from "react";

function CategoryMenu({ onSelectCategory }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const handleSelect = (categoryEnum) => {
    onSelectCategory(categoryEnum);
    setOpen(false);
  };

  return (
    <div className="catalog-wrapper">
      <button className="catalog-button" onClick={toggleMenu}>
        ☰ Каталог
      </button>
      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleSelect("SHOES")}>Кроссовки</div>
          <div className="dropdown-item" onClick={() => handleSelect("TSHIRT")}>Футболки</div>
          <div className="dropdown-item" onClick={() => handleSelect("PANTS")}>Джинсы</div>
          <div className="dropdown-item" onClick={() => handleSelect("DRESS")}>Платье</div>
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;
