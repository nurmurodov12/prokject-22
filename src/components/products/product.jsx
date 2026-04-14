import React from "react";
import "./product.css";

const Product = ({
  image,
  discount,
  description,
  starts,
  credit,
  oldprice,
  newprice,
}) => {
  return (
    <div className="product">
      <div className="product-top">
        <img src={image} alt="Bu yerda usha darmayetni rasmi bo'lishi kerak edi" />
        <i className="fa-regular fa-heart"></i>
        {discount ? (
          <p className="discount-true">Aksiya</p>
        ) : (
          <p className="discount-false">Eksklyuziv</p>
        )}
      </div>

      <div className="product-bottom">
        <p className="bottom-p">{description}</p>

        <span className="stars-product">
          <i className="fa-solid fa-star"></i>
          <span>
            {starts} ({Math.floor(Math.random() * 1000)} sharh)
          </span>
        </span>

        <div className="credit">
          <p>
            {credit}
            so'm/oyiga
          </p>
        </div>

        <div className="prices">
            <p className="old-price">
                {
                    oldprice
                } so'm
            </p>

            <p className="new-price">
                {
                    newprice
                } so'm

            </p>
        </div>

        <div className="add">
            <i className="fa-regular fa-calendar-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
