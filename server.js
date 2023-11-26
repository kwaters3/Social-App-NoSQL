const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Path: server.js
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Path: server.js
db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
