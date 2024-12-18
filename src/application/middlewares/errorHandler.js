const Boom = require("@hapi/boom");

function errorHandler(err, req, res, next) {
    if (Boom.isBoom(err)) {
        const { statusCode, payload } = err.output;
        return res.status(statusCode).json(payload);
    }

    console.error("Unhandled Error:", err);
    res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
        message: err.message || "Something went wrong"
    });
}

module.exports = errorHandler;