const config = require("../../config/env");

class MovieApiRepository {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async findByTitle(title) {
        const response = await this.apiClient.movie.searchMovie(title);

        console.log("Movie API response:");
        console.log(response.data.results[0]);

        return response.data.results[0] || null;
    }

    async getGenres() {
        const response = await this.apiClient.movie.getGenres();
        return response.data.genres || [];
    }
}

module.exports = MovieApiRepository;