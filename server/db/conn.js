const mongoose = require("mongoose");
require("dotenv").config()

mongoose.connect(process.env.DBURL).then(() => {
    console.log("DB CONNECTED....");
}).catch((e) => {
    console.log("error" , e);
    console.log("DB CONNECTION ERROR....");
})