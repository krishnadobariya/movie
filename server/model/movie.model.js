const mongoose = require("mongoose");
require("dotenv").config();

const movieSchema = new mongoose.Schema({
    movie_name:{
        type: String,
        require: true
    },
    released_date:{
        type: String,
        require: true,
    },
    rating:{
        type: String,
    }
}, {
    timestamps: true
}, {
    collection: "movie"
})

module.exports = mongoose.model("movie" , movieSchema);