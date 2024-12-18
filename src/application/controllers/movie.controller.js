const { Boom } = require("@hapi/boom");
const city = require("../../shared/utils/city");

class MovieController {
    constructor(fetchMovieData, processMovieData) {
        this.fetchMovieData = fetchMovieData;
        this.processMovieData = processMovieData;
    }

    async getMovieData(req, res) {
        const { title } = req.query;

        if (!title) {
            return next(Boom.badRequest("Movie title is required"))
        }

        try {
            const movieData = await this.fetchMovieData.execute(title);
            res.status(200).json({
                statusCode: 200,
                data: movieData,
                message: "Movie data fetched successfully"
            });
        } catch (error) {
            next(error)
        }
    }

    async getMovieWithWeatherData(req, res) {
        const { title } = req.query;

        if (!title) {
            return next(Boom.badRequest("Movie title is required"))
        }

        try {
            const movieData = await this.processMovieData.execute(title, city);
            res.status(200).json({
                statusCode: 200,
                data: movieData,
                message: "Movie data fetched and sended successfully"
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = MovieController;