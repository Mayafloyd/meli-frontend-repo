const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3001;

// Endpoint para buscar artículos
app.get("/api/items", async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    const results = response.data.results.slice(0, 4);
    const categories = [];

    const items = results.map((item) => {
      categories.push(item?.category_id);
      return {
        id: item?.id,
        title: item?.title,
        price: {
          currency: item?.currency_id,
          amount: Math.floor(item?.price),
          decimals: parseFloat((item?.price % 1).toFixed(2)),
        },
        picture: item?.thumbnail,
        condition: item?.condition,
        free_shipping: item?.shipping.free_shipping,
      };
    });
    res.json({
      author: {
        name: "Sara",
        lastname: "Acevedo Maya",
      },
      categories, // Se intuye que este array son los id de categoría de cada item
      items,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint para los detalles de un artículo
app.get("/api/items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const itemResponse = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    const descriptionResponse = await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const item = itemResponse?.data;

    res.json({
      author: {
        name: "Sara",
        lastname: "Acevedo Maya",
      },
      item: {
        id: item?.id,
        title: item?.title,
        price: {
          currency: item?.currency_id,
          amount: Math.floor(item?.price),
          decimals: parseFloat((item?.price % 1).toFixed(2)),
        },
        picture: item?.thumbnail,
        condition: item?.condition,
        free_shipping: item?.shipping.free_shipping,
        sold_quantity: item?.sold_quantity,
        description: descriptionResponse?.data.plain_text,
      },
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
