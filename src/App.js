import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import ProductUploader from "./components/productUploader";
import ProductCard from "./components/productCard";
function App() {
  return (
    <div>
      <Header />
      <ProductCard />
    </div>
  );
}

export default App;
