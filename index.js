const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json()); // for parsing application/json

app.use("/products", require("./routes/products"))
app.use("/categories", require("./routes/categories"))

app.listen(PORT, () => console.log(`Server on port ${PORT}`))