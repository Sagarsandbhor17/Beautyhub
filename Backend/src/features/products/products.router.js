const express=require('express');
const app=express.Router();
const Product=require('./products.model');

app.get('/',async(req,res)=>{
    let products = await Product.find();
     res.status(201).send(products);
});

app.get('/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        let item=await Product.findById(id);
        res.status(201).send(item);
    }
    catch(e){
        res.status(401).send(e.message);
    }
})

app.post('',async(req,res)=>{
    try{let product=await Product.create(req.body);
    res.send("Product Added Scuccessfully");

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
        res.status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }

})

// ---------------------------------Hairs--------------------------------------

app.get('/hairs',async(req,res)=>{
    try{
    let products=await Product.find({product_type:"Hairs"});
    res.status(201).send(products);
    }
    catch(e){
        res.send(401).send(e.message)
    }
})

app.get("/hairs/:id",async(req,res)=>{
    try{let {id}=req.params;
    let item=await Product.findById(id);
    res.status(201).send(item);}

    catch(e){
        res.status(401).send(e.message);
    }
})

app.patch("/hairs/:id",async(req,res)=>{
    let {id}=req.params;
    try{
        let product=await Product.findByIdAndUpdate(id,{...req.body},{new:true});
        return res.status(201).send(product);
    }
    catch (e) {
      return res.status(500).send(e.message);
    }
  });

app.delete('/hairs/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        await Product.deleteOne({_id:id});
        res.status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }
})


// ---------------------------skin care----------------------------

app.get('/skincare',async(req,res)=>{
    try{
    let products=await Product.find({product_type:"Skin Care"});
    res.status(201).send(products);
    }
    catch(e){
        res.send(401).send(e.message)
    }
})

app.get("/skincare/:id",async(req,res)=>{
    try{
    let {id}=req.params;
    let item=await Product.findById(id);
    res.status(201).send(item);}

    catch(e){
        res.status(401).send(e.message);
    }
})

app.patch("/skincare/:id",async(req,res)=>{
    let {id}=req.params;
    try{
        let product=await Product.findByIdAndUpdate(id,{...req.body},{new:true});
        return res.status(201).send(product);
    }
    catch (e) {
      return res.status(500).send(e.message);
    }
  });

app.delete('/skincare/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        await Product.deleteOne({_id:id});
        res.status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }
})

// ----------------------------------fragrance-------------------------------------------

app.get('/fragrance',async(req,res)=>{
    try{
    let products=await Product.find({product_type:"Fragrance"});
    res.status(201).send(products);
    }
    catch(e){
        res.send(401).send(e.message)
    }
})

app.get("/fragrance/:id",async(req,res)=>{
    try{let {id}=req.params;
    let item=await Product.findById(id);
    res.status(201).send(item);}

    catch(e){
        res.status(401).send(e.message);
    }
})

app.patch("/fragrance/:id",async(req,res)=>{
    let {id}=req.params;
    try{
        let product=await Product.findByIdAndUpdate(id,{...req.body},{new:true});
        return res.status(201).send(product);
    }
    catch (e) {
      return res.status(500).send(e.message);
    }
  });

app.delete('/fragrance/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        await Product.deleteOne({_id:id});
        res.status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }
})


// ------------------------------------bath & body-----------------------------------

app.get('/bath&body',async(req,res)=>{
    try{
    let products=await Product.find({product_type:"Bath & Body"});
    res.status(201).send(products);
    }
    catch(e){
        res.send(401).send(e.message)
    }
})

app.get("/bath&body/:id",async(req,res)=>{
    try{let {id}=req.params;
    let item=await Product.findById(id);
    res.status(201).send(item);}

    catch(e){
        res.status(401).send(e.message);
    }
})

app.patch("/bath&body/:id",async(req,res)=>{
    let {id}=req.params;
    try{
        let product=await Product.findByIdAndUpdate(id,{...req.body},{new:true});
        return res.status(201).send(product);
    }
    catch (e) {
      return res.status(500).send(e.message);
    }
  });

app.delete('/bath&body/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        await Product.deleteOne({_id:id});
        res.status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }
})

// ----------------------------------------------------------------------------
module.exports=app;