import React from "react";
import { useLocation } from "react-router-dom";
import Search from "../Search";
import "./layout.scss";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      {/* El Search aparece en todas las pantallas, entonces me parece que netamente debe aparecer en un layout, lo cual también lo hace muy escalable */}
      <Search />
      <div className="content">
        {/* Los breadcrumbs están hardcodeados ya que no encontré una api para consultarlos, asumo que idealmente se haría con el array de ids de catorías  */}
        {location.pathname !== "/" && (
          <p className="content__breadcrumbs">
            Arte, Papelería y Mercería {">"} Papelería Escolar {"> "}
            EscrituraLápices
          </p>
        )}
        {/* y se renderiza el contenido variable acá abajo */}
        <div className="content__child">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
