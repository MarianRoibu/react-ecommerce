const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.post('/allProducts', (req, res) => {
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));

  const newProduct = req.body;
  newProduct.id = products.length + 1;

  products.push(newProduct);

  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(products));

  res.json(newProduct);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
