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
    fetch(`/api/items/${id}`)
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((data) => {
        // Guardamos los datos en el estado del componente
        setData(data?.item);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Manejamos cualquier error que ocurra durante el fetch
        console.error("Hubo un problema con la petición Fetch:", error);
      });
  }, [id]);

  console.log("data", data);
  return (
    <div>
      {/* ProductView {id} */}
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
