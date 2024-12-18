const axios = require("axios");
const env = require("../config/env");

const weatherApiClient = axios.create({
    baseURL: env.externalUrl.meteoApi,
});

module.exports = weatherApiClient;