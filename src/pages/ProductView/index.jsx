import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";

const ProductView = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

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
      })
      .catch((error) => {
        // Manejamos cualquier error que ocurra durante el fetch
        console.error("Hubo un problema con la petición Fetch:", error);
      });
  }, [id]);

  console.log("data", data);
  return (
    <div>
      {/* ProductView {id} */}
      {data && (
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
      )}
    </div>
  );
};

export default ProductView;
