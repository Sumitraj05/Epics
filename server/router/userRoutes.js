const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../db/models/userModel')
const router = express.Router()
const auth = require('../middlewares/auth')

// Registration
router.get('/register', (req, res) => {
    res.send('register page')
})

router.post('/register', auth, async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (user) {
            return res.status(400).json({ message: "email already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const result = await newUser.save();

        //jsonwebtoken
        const token = jwt.sign({
            userId: result._id,
            email: result.email,
            name: result.name
        },
            process.env.JWT_SECRET
        )

        res.cookie('token', token)
        res.status(200).json({
            message: "success",
            result,
            token: token,
            status: true
        })
    } catch (err) {
        res.status(500).json("internal server error")
    }
})

// Login 
router.get('/login', auth, (req, res) => {
    res.send('login page')
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await userModel.findOne({ email })
        if (!userExist) {
            return res.status(400).json({ message: "Incorrect Credentials" })
        }

        const result = await bcrypt.compare(password, userExist.password);

        if (result) {
            //jsonwebtoken
            const token = jwt.sign({
                userId: result._id,
                email: result.email,
                name: result.name
            },
                process.env.JWT_SECRET
            )

            res.cookie('token', token)
            res.status(200).json({
                message: "success",
                result,
                token: token,
                status: true
            })
        }
    }catch (err) {
        res.status(500).json("Internal Server error")
    }
})

module.exports = router