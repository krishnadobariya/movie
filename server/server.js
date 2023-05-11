const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db/conn");

require("dotenv").config();
const port = process.env.PORT || 8001;


const movieRouter = require('./router/movie.router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/movie" , movieRouter);

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})