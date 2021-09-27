require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const router = require('./app/router');

const app = express();

const port = process.env.PORT || 3000;

const corsOptions ={
    origin:'https://chibi-cafe.netlify.app',
    credentials:true,           
    optionSuccessStatus:200
}

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json())
app.use(router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

