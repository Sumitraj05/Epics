const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 
const userRouter = require('./router/userRoutes')

// database connection 
const DBconnection = require('./db/connection/config.js');
DBconnection();

app.use(express.json())

// user Router
app.use('/user', userRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log('server is running at port: 3000')
})