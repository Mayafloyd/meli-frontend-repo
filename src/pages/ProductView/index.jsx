import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

const ProductView = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    // Realizamos el llamado a la API
    const getAPIItems = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/items/${id}`);
          const data = await response?.json();
          setData(data?.item);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          // Manejamos cualquier error que ocurra durante el fetch
          console.error("Hubo un problema con la petición Fetch:", error);
        }
      }
    };
    getAPIItems();
  }, [id]);

  return (
    <div>
      {/* Se hace una condición para que se muestre o el loading, o el producto o un texto de not found */}
      {loading ? (
        <Loading />
      ) : data !== null && data ? (
        <ProductDetail
          condition={data?.condition}
          soldQuantity={data?.sold_quantity ?? null}
          title={data?.title}
          price={data?.price?.amount}
          decimals={data?.price?.decimals}
          currency={data?.price?.currency}
          picture={data?.picture}
          description={data?.description}
        />
      ) : (
        <NotFound text={"No se tiene información de este producto"} />
      )}
    </div>
  );
};

export default ProductView;
