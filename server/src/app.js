/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
