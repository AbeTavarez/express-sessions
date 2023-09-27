const User = require('../models/user');

/**
 * @method POST
 * @route /api/auth/register
 * @description registers or create a new user
 */
async function register(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

/**
 * @method POST 
 * @route /api/auth/login 
 * @description authenticates a user 
 */
async function login(req, res) {
    try {
        // find user in db by email
        const dbUser = await User.find({email: req.body.email});
        
        // if user is NOT found error
        if (!dbUser) {
            return res.status(400).json("Check credentials");
        }
        // if user is found send back user
        res.status(200).json(dbUser);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = {
    register,
    login
}