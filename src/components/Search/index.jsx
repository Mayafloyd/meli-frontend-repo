import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./search.scss";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Construye la URL con el query parameter y redirige a la ruta deseada
    navigate(`/items?search=${inputText}`);
  };
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
