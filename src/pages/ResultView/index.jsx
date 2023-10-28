import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import "./resultView.scss";

const ResultView = () => {
  const location = useLocation();
  const [items_, setItems_] = useState([]);
  const myParam = new URLSearchParams(location.search).get("search");
  useEffect(() => {
    axios
      .get(`/api/items?q=${myParam}`)
      .then((response) => {
        setItems_(response.data.items);
      })
      .catch((error) =>
        console.error("Hubo un error al cargar los datos:", error)
      );
  }, [myParam]);

  console.log("items", items_);
  return (
    <div>
      {items_
        ? items_.map((item_) => (
            <Link key={item_?.id} to={`/items/${item_?.id}`} className="link">
              <ProductItem
                image={item_?.picture}
                title={item_?.title}
                price={item_?.price?.amount}
                decimals={item_?.price?.decimals}
                currency={item_?.price?.currency}
                free_shipping={item_?.free_shipping}
              />
            </Link>
          ))
        : null}
    </div>
  );
};

export default ResultView;
