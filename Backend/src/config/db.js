const mongoose = require("mongoose")

const connect = () =>{
    return mongoose.connect("mongodb+srv://beauty:hub@cluster0.gjxxf5s.mongodb.net/beautyhub")
};

module.exports = connect;