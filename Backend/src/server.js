const express = require("express");
const cors=require("cors");
const user=require('./features/users/users.router');
const product=require('./features/products/products.router')
let PORT = 8080;

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())
app.use("/user", user);
app.use("/products",product);

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
