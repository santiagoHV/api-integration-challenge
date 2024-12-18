const express = require('express')
const cors = require('cors')
const routerApi = require('./src/infrastructure/express/routes')
const errorHandler = require('./src/application/middlewares/errorHandler')

const createApp = () => {
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/health', (req, res) => {
        res.json({ status: 'UP' })
    })


    routerApi(app)

    app.use(errorHandler)

    return app
}

module.exports = createApp