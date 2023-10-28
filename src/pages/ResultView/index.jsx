import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import "./resultView.scss";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

const ResultView = () => {
  const location = useLocation();
  const [items_, setItems_] = useState([]);
  const [loading, setLoading] = useState(true);
  const myParam = new URLSearchParams(location.search).get("search");
  useEffect(() => {
    axios
      .get(`/api/items?q=${myParam}`)
      .then((response) => {
        setItems_(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Hubo un error al cargar los datos:", error);
        setLoading(false);
      });
  }, [myParam]);

  return (
    <div>
      {/* Se hace una condición para que se muestre o el loading, o la lista de productos o un texto de not found */}
      {loading ? (
        <Loading />
      ) : items_ && items_.length > 0 ? (
        items_.map((item_) => (
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
      ) : (
        <NotFound text={"No hay resultados para esta búsqueda"} />
      )}
    </div>
  );
};

export default ResultView;
