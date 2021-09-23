require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors')

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

