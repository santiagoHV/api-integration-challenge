const axios = require("axios");
const env = require("../config/env");

const movieApiClient = axios.create({
    baseURL: env.externalUrl.movieApi,
    headers: {
        Authorization: `Bearer ${env.movieApiKey}`
    }
});

movieApiClient.movie = {
    searchMovie: title => movieApiClient.get("/search/movie", { params: { query: title } }),
    getGenres: () => movieApiClient.get("/genre/movie/list")
};

module.exports = movieApiClient;