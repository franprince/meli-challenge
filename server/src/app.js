const express = require("express");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");
const port = 3001;

app.use(cors());

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  fetch(`https://api.mercadolibre.com/products/${id}`)
    .then((data) => data.json())
    .then((product) => {
      if (product.name && res.statusCode === 200) {
        res.status(200).json({
          name: product.name,
          attributes: product.attributes,
          pictures: product.pictures,
          id: product.id,
        });
      } else {
        res.status(404).json(product);
      }
    })
    .catch((err) => res.json.status(500)({ message: err }));
});

app.listen(port, () => {
  console.log(`🤖<Server listening at http://localhost:${port})`);
});
