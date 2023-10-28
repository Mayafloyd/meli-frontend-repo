import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("muestra el mensaje del home", () => {
  render(<Home />);
  expect(
    screen.getByText("hola, busca el producto que necesites")
  ).toBeInTheDocument();
});
