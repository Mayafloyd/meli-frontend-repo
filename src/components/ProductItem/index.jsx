import React from "react";
import "./productItem.scss";

const ProductItem = (props) => {
  const { image } = props;
  return (
    <div className="container2">
      <img src={image} alt="product" className="container2__img" />
      <div className="container2__infoContainer">
        <p className="container2__infoContainer__cost">$ 1.980</p>
        <p className="container2__infoContainer__name">
          Iphone ipad touch Lorem ipsum dolor sit amet consectetur adipisicing
          elit
        </p>
        <p className="container2__infoContainer__locationText">
          Capital Federal
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
