import React from "react";
import Search from "../Search";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Search />
      <div className="content">
        <p className="content__breadcrumbs">
          Arte, Papelería y Mercería {">"} Papelería Escolar {"> "}
          EscrituraLápices
        </p>
        <div className="content__child">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
