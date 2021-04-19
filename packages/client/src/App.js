import "./App.scss";
import React, { useState } from "react";
import Product from "./components/Product";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  const [productData, setProductData] = useState({
    data: null,
    status: "idle",
    error: "",
  });

  async function handleSearch(event, value) {
    event.preventDefault();
    try {
      if (!value) return;
      setProductData({ ...productData, status: "pending" });
      const res = await fetch(`http://localhost:3001/products/${value}`);
      const data = await res.json();
      if (res.status === 404) {
        setProductData({
          data: null,
          status: "error",
          error: "No se encontró el producto.",
        });
      } else if (res.status === 200) {
        setProductData({
          data: data,
          status: "fullfilled",
          error: "",
        });
      } else {
        setProductData({
          data: null,
          status: "error",
          error: res.status === 500 ? "Error del servidor" : "Hubo un error",
        });
      }
    } catch (error) {
      setProductData({
        data: null,
        status: "error",
        error: error.message,
      });
    }
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <SearchBox
            title={
              productData.status === "idle" ? "Indicá el id del producto" : null
            }
            handleSearch={handleSearch}
          />
          <Product productData={productData} />
        </section>
      </main>
    </div>
  );
}

export default App;
