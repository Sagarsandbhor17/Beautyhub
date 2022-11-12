const express = require("express");
const Cart = require("./cart.model");
const User = require("../users/users.model");
const jwt=require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    let {id,email} = jwt.decode(token);
    
    let user = await User.findById(id);

    if (user.email === email) {
      const verification=jwt.verify(token,"Secret");
      // console.log(verification)
      req.userId = id;
      next();
    } else {
      res
        .status(401)
        .send("Cannot Perform this opertation, missing persmission");
    }
  } else {
    res.status(401).send("Cannot Perform this opertation, missing persmission");
  }
};
const app=express.Router();
// app.use(authMiddleware);

app.get("/", async (req, res) => {
  try {
    let items = await Cart.find({
      // user: req.userId,
    }).populate(["user", "product"]);
    res.send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let cartItem = await Cart.findOne({
      user: req.userId,
      product: req.body.product,
    }).populate("product");

    if (cartItem) {
      let item = await Cart.findByIdAndUpdate(
        cartItem.id,
        {
          quantity: req.body.quantity,
        },
        {
          new: true,
        }
      ).populate("product");
      return res.send(item);
    } else {
      let item = await Cart.create({
        ...req.body,
        quantity:1
      });
      return res.send(item);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.patch("/:id",async(req,res)=>{
  let {id}=req.params;
  try{
      let cart=await Cart.findByIdAndUpdate(id,{...req.body},{new:true});
      return res.status(201).send(cart);
  }
  catch (e) {
    return res.status(500).send(e.message);
  }
});

app.delete('/:id',async(req,res)=>{
  let {id}=req.params;
    try{
        await Cart.deleteOne({_id:id});
        res.status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }
})

app.get('/:id',async(req,res)=>{
  let {id}=req.params;
  try{
    let item=await Cart.findById(id).populate("product");
    res.status(201).send(item);
  }
  catch(e){
    res.status(401).send(e.message);
  }
})

module.exports = app;
