const setupPrometheus = require('./setupPrometheus');
const setName = require('./middleware/setName');

function initialiseRoutes(app) {
  const prometheusMiddleware = setupPrometheus(app);

  app.use(
    prometheusMiddleware.requestDuration('http_request_seconds')
  );

  app.get('/',
    setName,
    function (request, response) {
      response.send('Hello there ' + response.locals.name);
    }
  );

  app.get('/metrics',
    prometheusMiddleware.heapUsage('heap_used', 'heap_total'),
    prometheusMiddleware.report()
  );
}

module.exports = initialiseRoutes;
