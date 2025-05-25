const db = require('./config/database');
const envConfig = require('./config/environment');
const express = require('express');
const app = express();
const PORT = envConfig.port || 3000;

app.use(express.static("./client/public"));
app.use(express.urlencoded({extended: true}));

app.post('/user', (req, res)=>{
    let data = req.body;
    res.status(200).end(data.name);
})

const start = async () => {
    try{
        await db();
        app.listen(PORT, ()=>{console.log(`Server Running at Port:${PORT}`)});
    }
    catch(err){ console.error("error"); }
}
