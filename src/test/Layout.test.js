import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../components/Layout";

describe("Layout Component test", () => {
  it("Debería mostrar el Search Component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout />
      </MemoryRouter>
    );
    expect(
      screen.getByPlaceholderText("Nunca dejes de buscar")
    ).toBeInTheDocument();
  });

  it('No debería mostrar los breadcrumbs cuando el path es "/"', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout />
      </MemoryRouter>
    );
    expect(
      screen.queryByText("Arte, Papelería y Mercería")
    ).not.toBeInTheDocument();
  });

  it('Debería mostrar los breadcrumbs cuando el path no es "/"', () => {
    render(
      <MemoryRouter initialEntries={["/some-other-path"]}>
        <Layout />
      </MemoryRouter>
    );
    expect(
      screen.getByText((content) =>
        content.startsWith("Arte, Papelería y Mercería")
      )
    ).toBeInTheDocument();
  });
});
