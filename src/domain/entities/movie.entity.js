class Movie {
    constructor({ title, genres, releaseDate }) {
        this.title = title;
        this.genres = genres;
        this.releaseDate = releaseDate;
    }

    setWeather(weather) {
        this.weather = weather;
    }

    setGenres(genres) {
        this.genres = genres;
    }
}

module.exports = Movie;