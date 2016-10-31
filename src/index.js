const express = require('express');
const initialiseRoutes = require('./routes');

const app = express();

initialiseRoutes(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
