const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
mongoose.set('strictQuery', false);

const connection = mongoose.connection;
connection.once('open', () => 
{
    console.log("MongoDB database connection established successfully.");
});

const registerRouter = require('./routes/register');
app.use('/register', registerRouter);

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

app.listen(port, () => 
{
    console.log(`Server is running on port: ${port}`);
});