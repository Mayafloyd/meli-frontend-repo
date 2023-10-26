const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3001;

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los datos de gatos" });
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
