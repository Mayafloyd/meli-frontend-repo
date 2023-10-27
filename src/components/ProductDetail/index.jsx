import React from "react";
import "./productDetail.scss";

const ProductDetail = () => {
  return (
    <div className="productContainer">
      <div className="productContainer__firstChild">
        <img
          src="https://cdn2.thecatapi.com/images/cks.jpg"
          alt="productoDetalle"
          className="productContainer__firstChild__img"
        />
        <div className="productContainer__firstChild__description">
          <p className="productContainer__firstChild__description__subtitle">
            Nuevo 234 vendidos
          </p>
          <h1 className="productContainer__firstChild__description__title">
            Deco reverse sombrero oxfox
          </h1>
          <p className="productContainer__firstChild__description__cost">
            $ 1.980
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quo
          nesciunt. Error dignissimos reprehenderit ratione in neque tenetur,
          perferendis impedit maiores ea sunt officiis autem, optio nostrum cum
          nisi quis!
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
