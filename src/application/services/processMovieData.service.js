class ProcessMovieData {
    constructor(
        fetchMovieData,
        fetchWeatherData,
        mapMovieGenres,
        sendToWebhook
    ) {
        this.fetchMovieData = fetchMovieData;
        this.fetchWeatherData = fetchWeatherData;
        this.mapMovieGenres = mapMovieGenres;
        this.sendToWebhook = sendToWebhook;
    }

    async execute(title, city) {
        const movie = await this.fetchMovieData.execute(title);
        const weather = await this.fetchWeatherData.execute(city, movie.releaseDate);
        const genres = await this.mapMovieGenres.execute(movie.genres);

        movie.setGenres(genres)
        movie.setWeather(weather);

        await this.sendToWebhook.execute(movie);

        return movie;
    }
}

module.exports = ProcessMovieData;