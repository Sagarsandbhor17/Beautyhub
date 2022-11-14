const mongoose = require("mongoose")

const connect = () =>{
    return mongoose.connect(process.env.MONGOURL);
};

module.exports = connect;