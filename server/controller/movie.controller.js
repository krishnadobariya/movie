const movieModel = require("../model/movie.model")
const _ = require("lodash")
exports.addMovie = async (req, res) => {
    try {

        const addMovie = new movieModel({
            movie_name: req.body.movie_name,
            released_date: req.body.released_date,
            rating: req.body.rating
        })

        const saveMovieData = await addMovie.save()

        res.status(201).json({
            message: "Movie Create Successfully",
            data: saveMovieData,
            status: true,
            code: 200
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Somthing Went Wrong.",
            status: false,
            code: 500
        })
    }
}

exports.getAllMovie = async (req, res) => {
    try {

        const pageSize = req.params.limit
        const pageNumber = req.params.page || 1; // Get the current page number from the query parameters
        const startIndex = (pageNumber - 1) * pageSize;

        const getAllMovieList = await movieModel.find({}).limit(pageSize).skip(startIndex)
        if (_.isEmpty(getAllMovieList)) {
            res.status(200).json({
                message: "Movie get Successfully",
                data: [],
                status: true,
                code: 200
            })
        } else {
            res.status(200).json({
                message: "Movie get Successfully",
                data: getAllMovieList,
                status: true,
                code: 200
            })
        }


    } catch (error) {
        res.status(500).json({
            message: "Somthing Went Wrong.",
            status: false,
            code: 500
        })
    }
}