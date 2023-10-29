import { render, screen } from "@testing-library/react";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import ResultView from "../pages/ResultView";

const axiosMock = new AxiosMockAdapter(axios);
const mockedData = {
    items: [
        {
            "id": "MLA1530370600",
            "title": "Gabinete Pc Kit Overtech Ov-k910 Negro Con Fuente 6500",
            "price": {
                "currency": "ARS",
                "amount": 37999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_839964-MLU72046195332_102023-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA1413372458",
            "title": "Notebook Hp Amd Ryzen 7 5700u 12gb 256gb Ssd 15.6  Touchscreen Tactil Windows 11 (15-ef2081ms)",
            "price": {
                "currency": "ARS",
                "amount": 1041436,
                "decimals": 0.55
            },
            "picture": "http://http2.mlstatic.com/D_889990-MLA51839158430_102022-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA1548581466",
            "title": "Computadora Cpu Core I3 8 Gb 120 Gb 1 Tb Hdd Led 19 Outlet",
            "price": {
                "currency": "ARS",
                "amount": 189990,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_813260-MLA72216427163_102023-I.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA930129754",
            "title": "Pc Armada Intel C I3 + 8 Gb Ram Ssd 240 Gab  Kit  W10 Offic ",
            "price": {
                "currency": "ARS",
                "amount": 179999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_755943-MLA31053525642_062019-I.jpg",
            "condition": "new",
            "free_shipping": true
        }
    ],
  };

beforeEach(() => {
  axiosMock.reset();
});

test("renders Loading component when loading is true", () => {
    render(
      <MemoryRouter>
        <ResultView />
      </MemoryRouter>
    );
  
    const loadingElement = screen.getByRole("progressbar");
    expect(loadingElement).toBeInTheDocument();
  });

  test("renders ResultView component when loading is false and data is available", async () => {
    axiosMock.onGet("/api/items?q=computador").reply(200, mockedData);
    render(
        <MemoryRouter initialEntries={["/search?search=computador"]}>
          <ResultView />
        </MemoryRouter>
      );
    
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {});
    
      const productItems = screen.getAllByTestId("productItem");
      expect(productItems).toHaveLength(mockedData.items.length);
});

test("handles error when data fetch fails", async () => {
    axiosMock.onGet("/api/items?q=mySearchQuery").reply(500);
    global.fetch = jest.fn().mockRejectedValue(new Error("Error en la solicitud"));
    const consoleErrorSpy = jest.spyOn(console, "error");
  
    render(
      <MemoryRouter initialEntries={["/search?search=mySearchQuery"]}>
        <ResultView />
      </MemoryRouter>
    );
  
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {});
  
    expect(consoleErrorSpy).toHaveBeenCalledWith("Hubo un error al cargar los datos:", expect.any(Error));
    
  });
 