import React, { useState } from "react";

function ProductUploader() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("TSHIRT");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", category);

    try {
      const res = await fetch("http://localhost:8082/api/products", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("✅ Product uploaded successfully!");
        setName("");
        setPrice(0);
        setQuantity(1);
        setCategory("TSHIRT");
        setFile(null);
      } else {
        setStatus("❌ Failed to upload product.");
      }
    } catch (err) {
      console.error(err);
      setStatus("💥 Error occurred while uploading.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Upload Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="TSHIRT">T-Shirt</option>
          <option value="DRESS">Dress</option>
          <option value="PANTS">Pants</option>
          <option value="SHOES">Shoes</option>
        </select>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}

export default ProductUploader;
