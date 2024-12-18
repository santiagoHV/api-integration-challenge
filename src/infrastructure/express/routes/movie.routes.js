const express = require('express')
const env = require('../../../infrastructure/config/env')

const movieApiClient = require('../../../infrastructure/api-clients/movieApiClient')
const weatherApiClient = require('../../../infrastructure/api-clients/weatherApiClient')
const WebhookClient = require('../../../infrastructure/webhooks/webhookClient')

const MovieApiRepository = require('../../../infrastructure/repositories/api/movieApi.repository')
const WeatherApiRepository = require('../../../infrastructure/repositories/api/weatherApi.repository')

const FetchMovieDataService = require('../../../application/services/fetchMovieData.service')
const FetchWeatherDataService = require('../../../application/services/fetchWeatherData.service')
const SendToWebhookService = require('../../../application/services/sendToWebhook.service')
const ProcessMovieDataService = require('../../../application/services/processMovieData.service')
const MapMovieGenres = require('../../../application/services/mapMovieGenres.service')
const FetchMovieGenres = require('../../../application/services/fetchMovieGenres.service')

const MovieController = require('../../../application/controllers/movie.controller')

const router = express.Router()

const webhookClient = new WebhookClient(env.externalUrl.webhook)

const movieApiRepository = new MovieApiRepository(movieApiClient)
const weatherApiRepository = new WeatherApiRepository(weatherApiClient)

const fetchMovieData = new FetchMovieDataService(movieApiRepository)
const fetchWeatherData = new FetchWeatherDataService(weatherApiRepository)
const sendToWebhook = new SendToWebhookService(webhookClient)
const fetchMovieGenres = new FetchMovieGenres(movieApiRepository)
const mapMovieGenres = new MapMovieGenres(fetchMovieGenres)
const processMovieData = new ProcessMovieDataService(fetchMovieData, fetchWeatherData, mapMovieGenres, sendToWebhook)

const movieController = new MovieController(fetchMovieData, processMovieData)

router.get('/', movieController.getMovieData.bind(movieController))
router.get('/weather', movieController.getMovieWithWeatherData.bind(movieController))

module.exports = router