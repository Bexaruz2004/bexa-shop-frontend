import React, { useState } from "react";

function CategoryMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="catalog-wrapper">
      <button className="catalog-button" onClick={toggleMenu}>
        <span className="burger-icon">☰</span> Каталог
      </button>
      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Кроссовки</div>
          <div className="dropdown-item">Футболки</div>
          <div className="dropdown-item">Джинсы</div>
          <div className="dropdown-item">Платье</div>
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;
