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
      const data = await fetch(`/products/${value}`);
      const jsonData = await data.json();
      if (jsonData.error) {
        setProductData({
          data: null,
          status: "error",
          error: "No se encontró el producto.",
        });
      } else {
        setProductData({
          data: jsonData,
          status: "fullfilled",
          error: "",
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
