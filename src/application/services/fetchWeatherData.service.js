const { Boom } = require('@hapi/boom');
const Weather = require('../../domain/entities/weather.entity');

class FetchWeatherData {
    constructor(weatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    async execute(city, date) {
        const weather = await this.weatherRepository.getWeatherByDate(city, date);
        if (!weather) throw Boom.notFound("Weather not found");

        return new Weather({
            date: date,
            minTemp: weather.minTemp,
            maxTemp: weather.maxTemp
        });
    }
}

module.exports = FetchWeatherData;