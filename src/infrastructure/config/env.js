require("dotenv").config();

const config = {
    port: process.env.PORT || 3000,
    movieApiKey: process.env.MOVIE_API_KEY || "",
    externalUrl: {
        movieApi: process.env.MOVIE_API_URL || "https://api.themoviedb.org/3",
        webhook: process.env.WEBHOOK_URL || "https://eo9m0nh4z7lacho.m.pipedream.net",
        meteoApi: process.env.METEO_API_URL || "https://api.open-meteo.com/v1",
    }
};

module.exports = config;