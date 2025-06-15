import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heart, ShoppingBasket } from "lucide-react";

// Поддерживает фильтрацию по категории
function ProductCard({ selectedCategory = null }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/products")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error("Ошибка загрузки продуктов:", err));
  }, []);

  // Фильтрация по выбранной категории
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products;

  return (
    <div className="card-container">
      {filteredProducts.map((product) => (
        <div className="card" key={product.id}>
          {/* Фото */}
          <div className="card-img-wrapper">
            <img
              src={`http://localhost:8082${product.imageUrl}`}
              alt={product.name}
              className="card-img"
            />
          </div>

          {/* Информация */}
          <div className="card-info">
            <div className="card-header-row">
              <h3 className="card-title">{product.name}</h3>
              <span className="card-badge">{product.category}</span>
            </div>

            <p className="card-description">
              {product.description?.length > 100
                ? product.description.slice(0, 100) + "..."
                : product.description}
            </p>

            <div className="card__line"></div>

            {/* Нижняя часть */}
            <div className="card__footer">
              <h1 className="card__price">{product.price} сум</h1>
              <div className="card-icons">
                <div className="icon-1__wrapper">
                  <Heart className="icon" />
                </div>
                <div className="icon-1__wrapper two">
                  <ShoppingBasket className="icon icon__two" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
