
# API Integration Callenge

This project integrates two public APIs: The Movie Database API and Open-Meteo API. The service fetches movie details such as title, genres, and release date, then retrieves weather information for the release date and sends the combined data to a webhook.

## Features

- Movie search by title.
- Weather forecast retrieval based on the movie’s release date.
- Data combination and mapping.
- Webhook integration with detailed payload delivery.
- Centralized error handling using Boom.


## API Reference

#### Get Movie with its genders by title and get weather in Bogotá DC by the release date of the movie

```http
  GET /api/v1/movie/weather
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title of movie |

**Response example**
```
  {
    "statusCode": 200,
    "data": {
        "title": "Wicked",
        "genres": [
            "Drama",
            "Romance",
            "Fantasy"
        ],
        "releaseDate": "2024-11-20",
        "weather": {
            "date": "2024-11-20",
            "minTemp": 10.5,
            "maxTemp": 18.3
        }
    },
    "message": "Movie data fetched and sended     successfully"
}
```

#### Get Movie

```http
  GET /api/v1/movie
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title of movie |

## Project structure

**Clean Architecture Principles**

1. Separation of Concerns: Each layer handles a specific responsibility.
2. Dependency Inversion: Core logic depends only on abstractions.
3. Testability: Services are modular and easy to test.

### Directory Overview
```
/src
  ├── app/                # API endpoints and server setup
  │   ├── controllers/    # HTTP controllers
  │   ├── routes/         # Route definitions
  │   ├── middlewares/    # Error handling
  │   ├── services/       # Use cases (e.g., data fetching, mapping)
  ├── domain/             # Core business logic
  │   ├── entities/       # Domain models
  ├── infrastructure/     # API clients, external services
  │   ├── api-repositories/ # API access implementations
  │   ├── webhooks/       # Webhook client
  │   └── config/         # Config and environment variables
  └── shared/             # Common utilities and constants
```

### Why This Architecture?

- Scalability: Each service has a single responsibility, making the project easy to scale.
- Maintainability: Centralized configurations and separation of concerns reduce complexity.
- Security: Sensitive data like API keys and webhook URLs are stored in environment variables.
- Error Management: Errors are managed using Boom, providing clear and structured error responses.
## Installation

1. Clone the repository:

```bash
  cd https://github.com/santiagoHV/api-integration-challenge.git
```
    
2. Install dependencies (Recommended Node v20):

```bash
  cd api-integration-challenge
  npm install
```

3. Create an .env file:

```
  MOVIE_API_KEY=your_movie_api_key_here
  MOVIE_API_BASE_URL=https://api.themoviedb.org/3
  WEATHER_API_BASE_URL=https://api.open-meteo.com/v1
  WEBHOOK_URL=https://your-webhook-url.com
```

4. Run the project:

```bash
  npm run dev
```
## Demo

We recommend using Postman or Insomnia to test the endpoints. These tools allow you to send HTTP requests easily and inspect the responses.

1. Open Postman or Insomnia.
2. Create a new request:
* Method: GET
* URL: http://localhost:3000/api/movies?title=Wicked
3. Send the request and inspect the response.


## Future Improvements

* Add unit tests for services.
* Swagger documentation
* Add database persistence.
## Disclaimer

* Webhook Note: The webhook URL used in this project may sometimes be unreliable.

* Weather Data Availability: Not all release date movies have associated weather data for Bogotá. Testing with recent movies like "Wicked" is recommended for more consistent results.
## Author

- [Santiago Herrera](www.linkedin.com/in/s-herrera-v)