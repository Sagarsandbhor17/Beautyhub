const express = require("express");
var bodyParser = require("body-parser");
const cors=require("cors");
const user=require('./features/users/users.router');
const product=require('./features/products/products.router');
const cart=require('./features/cart/cart.router');
const dbConnect=require('./config/db')
let PORT =8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use("/users", user);
app.use("/products",product);
app.use('/cart',cart);
app.get('/' , (req , res) => {
  res.send("<div> <h1>LIFE IS AWESOME...</h1> <h3> You are watching backend of Beauty hub a clone of Skin Store </h3> </div>")
})

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
