import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/products")
      .then((res) => {
        setProducts(res.data.data); // используем data внутри data
        console.log("Fetched products:", res.data.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div class="container">
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={`http://localhost:8082${product.imageUrl}`}
              alt={product.name}
              className="card-img"
            />
            <div className="card-info">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-category">{product.category}</p>
              <p className="card-price">${product.price}</p>
              <p className="card-quantity">В наличии: {product.quantity} шт.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
