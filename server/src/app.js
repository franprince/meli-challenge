const express = require("express");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");
const port = 3001;

app.use(cors());

app.get("/products/:id", (req, res) => {
  const baseUrl = "https://api.mercadolibre.com/products/";
  const id = req.params.id;
  fetch(`${baseUrl}${id}`)
    .then((data) => data.json())
    .then((json) => {
      if (!json.error) {
        res.json({
          name: json.name,
          attributes: json.attributes,
          pictures: json.pictures,
        });
      } else {
        res.json(json);
      }
    })
    .catch((err) => res.send("Ocurrió un error:" + err));
});

app.listen(port, () => {
  console.log(
    `🤖<MeLi challenge server listening at http://localhost:${port})`
  );
});
