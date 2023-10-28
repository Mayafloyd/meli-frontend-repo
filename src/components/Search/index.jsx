import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./search.scss";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    // Esto se hace para mirar la opción de que al ingresar un id, directamente lleve a la vista detallada del producto
    const idProduct = await fetch(`/api/items/${inputText}`)
      .then((response) => response.json())
      .then((data) => {
        // Guardamos los datos en el estado del componente

        if (data?.item) {
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.error(
          "Hubo un problema con la petición Fetch en idProduct:",
          error
        );
        return false;
      });

    if (idProduct) {
      navigate(`/items/${inputText}`);
    } else {
      navigate(`/items?search=${inputText}`);
    }
  };

  //esto es para que reconozca la tecla enter para buscar
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="container">
      <div className="container__child">
        <Link to="/">
          <img
            src="/images/Logo_ML@2x.png"
            alt="Logo Meli"
            className="container__child__logo"
          />
        </Link>

        <div className="container__child__searcher">
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button
            onClick={handleSearch}
            className="container__child__searcher__button"
          >
            <img src="/images/ic_Search@2x.png" alt="Logo Lupa" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
