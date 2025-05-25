const mongoose = require("mongoose");
const envConfig = require("./environment");
const url = envConfig.database.url;

const db = () => {mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})}

// const db = mongoose.connection;

// db.on('error', console.error("error"));
// db.once('open', ()=>{console.log("connected")});

module.exports = db;