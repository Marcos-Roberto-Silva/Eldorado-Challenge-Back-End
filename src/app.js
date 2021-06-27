const express = require("express");
const routes = require('./routes');

const cors = require('cors');

require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.ACCESS_PORT || 8080;

app.use(cors());

app.use('/', routes);

require('./swagger-setup')(app);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
