class MapMovieGenres {
    constructor(fetchMovieGenres) {
        this.fetchMovieGenres = fetchMovieGenres;
    }

    async execute(genreIds) {
        const genres = await this.fetchMovieGenres.execute();
        return genreIds.map(id => genres[id] || "Unknown");
    }
}

module.exports = MapMovieGenres;