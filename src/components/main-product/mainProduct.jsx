import ProductsContainer from "../products/productsContainer";
import "./mainProduct.css";


const MainProduct = () => {
  return (
    <div className="container main-product">
      <h2 className="main-product-title">
        Arzon narxlar
        <i className="fa-solid fa-angle-down"></i>
      </h2>

      <ProductsContainer/>
    </div>
  );
};

export default MainProduct;
