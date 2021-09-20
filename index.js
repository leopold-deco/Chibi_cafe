require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || ;

// test

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});