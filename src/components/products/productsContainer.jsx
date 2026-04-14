import Product from "./product";
import "./productsContainer.css";

import React, { useEffect, useState } from "react";

const ProductsContainer = () => {
  const API_url = "https://69c558688a5b6e2dec2c41b6.mockapi.io/imtihon";
  const [data, setData] = useState([]);
  const [handleInfo, setHandleInfo] = useState("");
  const [fakeData, setFakeData] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) {
    <h1>Loading...</h1>;
  }
  useEffect(() => {
    const apiData = async () => {
      const response = await fetch(API_url);
      const dataJson = await response.json();
      setData(dataJson);
      setFakeData(dataJson);
    };

    apiData();
  }, []);

  function handleChange(e) {
    const search = fakeData.filter((val) => {
      return val.description.includes(e.target.value);
    });
    
    setHandleInfo(e.target.value);
    setData(search);
  }

  return (
    <div>
      <form className="product-search">
        <input
          type="text"
          name="product-search"
          placeholder="Search product"
          onChange={handleChange}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="products-container ">
        {data.map((val) => {
          return (
            <Product
              key={val.id}
              image={val.image}
              discount={val.discount}
              description={val.description}
              starts={val.starts}
              credit={val.credit}
              oldprice={val.oldprice}
              newprice={val.newprice}
            />
          );
        })}
      </div>

      <div className="again-div">
        <p>Yana ko'rsatish 20</p>
      </div>
    </div>
  );
};
export default ProductsContainer;
