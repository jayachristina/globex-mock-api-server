const express = require('express');
const app = express();
const fs = require('fs'); // Import the file system module

const port = 3000;


app.get('/reviews/list/{:id}', (req, res) => {
  filename=`./mocks/reviews-list-paginated.json`;
  readFileAsJson(filename, res);
});


app.get('/reviews/summary/{:id}', (req, res) => {
  filename=`./mocks/reviews-summary.json`;
  readFileAsJson(filename, res);
});



app.get('/services/catalog/product', (req, res) => {
  filename=`./mocks/products-list-paginated.json`;
  readFileAsJson(filename, res);
});

app.get('/services/catalog/product/{:id}', (req, res) => {
  filename=`./mocks/single-product.json`;
  readFileAsJson(filename, res);
});

app.get('/services/product/list/{:ids}', (req, res) => {
  filename=`./mocks/products-list.json`;
  readFileAsJson(filename, res);
});

app.get('/services/products', (req, res) => {
  filename=`./mocks/products-list-paginated.json`;
  readFileAsJson(filename, res);
});



function readFileAsJson(filename, res) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      return res.status(500).send('Error reading data file');
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing JSON from data.json:', parseErr);
      res.status(500).send('Error parsing data file');
    }
  });
}

app.listen(port, () => {
  console.log(`API Server running at http://localhost:${port}`);
});  