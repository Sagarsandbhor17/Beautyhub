const express=require('express');
const app=express.Router();
const Product=require('./products.model');

app.get('',async(req,res)=>{
    let products = await Product.find({});
     res.status(201).send(products);
});

app.post('',async(req,res)=>{
    try{let product=new Product(req.body);
    await product.save();
    res.status(200).send("Product Added Scuccessfully");

    }
    catch(e){
        res.status(400).send(e.message);
    }
})

app.patch("/:id",async(req,res)=>{
    let {id}=req.params;
    try{
        let product=await Product.findByIdAndUpdate(id,{...req.body},{new:true});
        return res.status(201).send(product);
    }
    catch (e) {
      return res.status(500).send(e.message);
    }
  });

app.delete('/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        await Product.deleteOne({_id:id});
        res.Status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }

})

// ---------------------------------Hairs--------------------------------------

app.get('/hairs',async(req,res)=>{
    try{
    let products=await Product.find({product_type:"hairs"});
    res.status(201).send(products);
    }
    catch(e){
        res.send(401).send(e.message)
    }
})

app.delete('/hairs/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        await Product.deleteOne({_id:id});
        res.Status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }
})


// ---------------------------Fragrance----------------------------