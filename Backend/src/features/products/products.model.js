const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    product_detail_link:{type:String},
    product_image:{type:String},
    productName:{type:String},
    product_tag:{type:String},
    product_tag_text:{type:String},
    star_rating:{type:Number},
    product_reviews:{type:Number},
    product_price:{type:Number},
    description:{type:Number},
    product_ingredients:{type:String},
    product_type:{type:String},
    product_subtype:{type:String},
    item_logo:{ttype:String}
})

const Product = mongoose.model("product", productSchema);
module.exports = Product;
