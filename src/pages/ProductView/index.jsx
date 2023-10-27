import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";

const ProductView = () => {
  const { id } = useParams();
  return (
    <div>
      ProductView {id}
      <ProductDetail />
    </div>
  );
};

export default ProductView;
