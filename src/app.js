const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.ACCESS_PORT || 3001;

app.delete("/customer/:id", (req, res) => res.send("Customer results"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
