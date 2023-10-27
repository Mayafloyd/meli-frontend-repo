import React from "react";
import { useLocation, Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import "./resultView.scss";

const ResultView = () => {
  const location = useLocation();

  const myParam = new URLSearchParams(location.search).get("search");
  return (
    <div>
      <p> {myParam}</p>
      <Link to={`/items/123456d`} className="link">
        <ProductItem image={"https://cdn2.thecatapi.com/images/5cq.jpg"} />
      </Link>
      <ProductItem image={"https://cdn2.thecatapi.com/images/dqt.jpg"} />
      <ProductItem image={"https://cdn2.thecatapi.com/images/cj9.jpg"} />
      <ProductItem image={"https://cdn2.thecatapi.com/images/MTg3NzE0Mw.jpg"} />
    </div>
  );
};

export default ResultView;
