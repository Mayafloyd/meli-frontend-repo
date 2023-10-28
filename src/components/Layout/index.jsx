import React from "react";
import { useLocation } from "react-router-dom";
import Search from "../Search";
import "./layout.scss";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <Search />
      <div className="content">
        {location.pathname !== "/" && (
          <p className="content__breadcrumbs">
            Arte, Papelería y Mercería {">"} Papelería Escolar {"> "}
            EscrituraLápices
          </p>
        )}
        <div className="content__child">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
