module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
     pluginContext.registerGatewayRoute((app) => {
        const swaggerUi = require('swagger-ui-express');
        const swaggerDocument = require('./swagger.json');

        app.use('/msec-security-storage-fg-api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
     });
  }
}