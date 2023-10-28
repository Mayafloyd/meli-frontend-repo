import React from "react";
import "./productDetail.scss";

const ProductDetail = (props) => {
  const {
    condition,
    soldQuantity,
    title,
    price,
    decimals,
    currency,
    picture,
    description,
  } = props;
  const totalPrice = price + decimals;
  return (
    <div className="productContainer">
      <div className="productContainer__firstChild">
        <img
          src={
            //eslint-disable-next-line
            picture.replace(/(http[s]?:\/\/[^\/]+\/..)/, "$1NQ_NP_2X_") ?? ""
          } //Una pequeña ayuda con expresiones regulares, para que la foto no fuera originalmente en miniatura (toda pixelada)
          alt="productoDetalle"
          className="productContainer__firstChild__img"
        />
        <div className="productContainer__firstChild__description">
          <p className="productContainer__firstChild__description__subtitle">
            {condition === "new" ? "Nuevo" : ""}{" "}
            {soldQuantity ? ` - ${soldQuantity} vendidos` : ""}
          </p>
          <h1 className="productContainer__firstChild__description__title">
            {title ?? ""}
          </h1>
          <p className="productContainer__firstChild__description__cost">
            {totalPrice?.toLocaleString("es-AR", {
              style: "currency",
              currency: currency,
            }) ?? ""}
          </p>
          <button className="productContainer__firstChild__description__btn">
            Comprar
          </button>
        </div>
      </div>
      <div className="productContainer__secondChild">
        <h2 className="productContainer__secondChild__subtitle">
          Descripción del producto
        </h2>
        <p className="productContainer__secondChild__text">
          {description || description !== ""
            ? description
            : "Este producto no tiene descripción"}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
