import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductView from "../pages/ProductView";

// Simula una respuesta exitosa de la API
const mockSuccessResponse = {
  item: {
    condition: "new",
    soldQuantity: 10,
    title: "Tu título de producto aquí",
    price: {
      amount: 100,
      decimals: 0,
      currency: "USD",
    },
    picture: "url/a/la/imagen.jpg",
    description: "Descripción del producto aquí",
  },
};

// Mock de la función fetch
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockSuccessResponse),
//   })
// );
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(mockSuccessResponse),
});

describe("ProductView", () => {
  // beforeAll(() => {
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(mockSuccessResponse),
  //     })
  //   );
  // });

  // beforeEach(() => {
  //   fetch.mockClear();
  // });

  it("muestra el detalle del producto cuando se obtiene el dato de la API", async () => {
    // render(
    //   <MemoryRouter initialEntries={["/items/1"]}>
    //     <Routes>
    //       <Route path="/items/:id" element={<ProductView />} />
    //     </Routes>
    //   </MemoryRouter>
    // );
    render(<ProductView />);

    // const conditionAndSoldQuantityText = await screen.findByText(
    //   "Nuevo - 50 vendidos"
    // );
    // expect(conditionAndSoldQuantityText).toBeInTheDocument();

    const titleText = await screen.findByText("Tu título de producto aquí");
    expect(titleText).toBeInTheDocument();

    const descriptionText = await screen.findByText(
      "Descripción del producto aquí"
    );
    expect(descriptionText).toBeInTheDocument();

    const priceText = await screen.findByText("$100");
    expect(priceText).toBeInTheDocument();
  });
});
