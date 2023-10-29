import React from "react";
import "./productDetail.scss";

const ProductDetail = (props) => {
  //Este componente exclusivamente dedicado a reenderizar un producto y sus detalles

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
    <div data-testid="product" className="productContainer">
      <div className="productContainer__firstChild">
        <img
          src={
            //eslint-disable-next-line
            picture.replace(/(http[s]?:\/\/[^\/]+\/..)/, "$1NQ_NP_2X_") ?? ""
          } //Una pequeña ayuda con expresiones regulares, para que la foto no fuera originalmente en miniatura (toda pixelada)
          alt={(title ?? "") + "imagen"}
          className="productContainer__firstChild__img"
        />
        <div className="productContainer__firstChild__description">
          <p className="productContainer__firstChild__description__subtitle">
            {/* Esto lo que hace es preguntar si es nuevo y si viene con la propiedad de solQuantity */}
            {condition === "new" ? "Nuevo" : ""}{" "}
            {soldQuantity ? ` - ${soldQuantity} vendidos` : ""}
          </p>
          <h1 className="productContainer__firstChild__description__title">
            {title ?? ""}
          </h1>
          <p className="productContainer__firstChild__description__cost">
            {/* Esta parte lo que hace es usar toLocaleString para que según el currency se de estilo al tipo de moneda de cada pais  */}
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
