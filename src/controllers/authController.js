const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const User = require('../models/user');

const router = express.Router();

function generateToken(params = { }){
    return jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
    });
}


router.post('/register', async (req, res) => {
    const { email } = req.body;
    
    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exisits.'});

        const user = await  User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id }),
        });
    }catch(err) {
        return res.status(400).send({ error: "Registration Failed."});
    }
});


router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user)
        return res.status(400).send({ error: 'User Not Found.'});

    if ( !await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid Password.'});

    user.password = undefined;

    res.send({ 
        user, 
        token: generateToken({ id: user.id }), 
    });
});

module.exports = app => app.use('/auth', router);