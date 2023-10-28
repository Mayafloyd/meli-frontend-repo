import React from "react";
import "./productItem.scss";

const ProductItem = (props) => {
  //Este componente sirve para ser iterado en la lista de items de producto

  const { image, title, price, free_shipping, currency, decimals } = props;

  const totalPrice = price + decimals;
  return (
    <div className="container2">
      <img
        //eslint-disable-next-line
        src={image.replace(/(http[s]?:\/\/[^\/]+\/..)/, "$1NQ_NP_2X_") ?? ""} //Una pequeña ayuda con expresiones regulares, para que la foto no fuera originalmente en miniatura (toda pixelada)
        alt={(title ?? "") + "imagen"}
        className="container2__img"
      />
      <div className="container2__infoContainer">
        <div className="container2__infoContainer__cost">
          <p>
            {/* Esta parte lo que hace es usar toLocaleString para que según el currency se de estilo al tipo de moneda de cada pais  */}
            {totalPrice?.toLocaleString("es-AR", {
              style: "currency",
              currency: currency,
            }) ?? ""}
            {free_shipping ? (
              <img src="/images/ic_shipping.png" alt="Truck icon" />
            ) : null}
          </p>
        </div>

        <p className="container2__infoContainer__name">{title ?? ""}</p>
        <p className="container2__infoContainer__locationText">
          Capital Federal
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
