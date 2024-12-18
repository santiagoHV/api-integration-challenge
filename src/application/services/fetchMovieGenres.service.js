class FetchMovieGenres {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
        this.genres = null; // Caché de géneros
    }

    async execute() {
        if (!this.genres) {
            const genresData = await this.movieRepository.getGenres();
            this.genres = genresData.reduce((acc, genre) => {
                acc[genre.id] = genre.name;
                return acc;
            }, {});
        }
        return this.genres;
    }
}

module.exports = FetchMovieGenres;