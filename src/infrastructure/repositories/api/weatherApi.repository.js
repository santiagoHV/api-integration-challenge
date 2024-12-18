class WeatherApiRepository {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getWeatherByDate(city, date) {
        try {
            const response = await this.apiClient.get("/forecast", {
                params: {
                    latitude: city.latitude,
                    longitude: city.longitude,
                    start_date: date,
                    end_date: date,
                    daily: "temperature_2m_min,temperature_2m_max",
                    timezone: "auto"
                }
            });

            console.log("Weather API response:");
            console.log(response.data);

            const { temperature_2m_min, temperature_2m_max } = response.data.daily;
            return {
                minTemp: temperature_2m_min[0] || "Not weather available for this date in this city",
                maxTemp: temperature_2m_max[0] || "Not weather available for this date in this city"
            };
        } catch (error) {
            throw new Error("Failed to fetch weather data");
        }
    }
}

module.exports = WeatherApiRepository;