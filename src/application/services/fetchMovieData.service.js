const { Boom } = require("@hapi/boom");
const Movie = require("../../domain/entities/movie.entity");

class FetchMovieData {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }

    async execute(title) {
        const movie = await this.movieRepository.findByTitle(title);
        if (!movie) throw Boom.notFound("Movie not found");

        return new Movie({
            title: movie.title,
            genres: movie.genre_ids,
            releaseDate: movie.release_date
        });
    }
}

module.exports = FetchMovieData;