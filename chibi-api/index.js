require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const router = require('./app/router');

const app = express();

const port = process.env.PORT || 3000;

// const corsOptions ={
//     origin:'https://chibi-cafe.netlify.app',
//     credentials:true,
//     optionSuccessStatus:200
// }
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(cors({'Access-Control-Allow-Origin': '*',}));
app.use(express.json());
app.use('public', express.static('public'));
app.use(express.static('./public'));
app.use(router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

