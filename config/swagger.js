const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My First API 🚀',
      version: '1.0.0',
      description: 'Bu mening birinchi backend API im',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
      {
        url: 'https://one088-back.onrender.com',
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./server.js'], // qayerdan kommentlarni o‘qisin
}

const swaggerSpec = swaggerJsdoc(options)

const swaggerSetup = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

module.exports = swaggerSetup
