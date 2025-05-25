const User = require('../model/user');

const createUser = async (req, res) =>{
    try{
        const userData = req.body;
        const myUser = new User({
            username: userData.name,
            password: userData.pass
        });
        await myUser.save();
        res.status(200).send(`Created User: ${userData.name}`);
    }
    catch(err){
        console.error("User Creation Error");
    }
}

module.exports = {createUser}