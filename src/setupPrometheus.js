const Prometheus = require('uw-lib-prometheus.js');

function setupPrometheus() {
  const prometheusInstance = new Prometheus();
  const middleware = prometheusInstance.middleware();

  prometheusInstance.newHistogram(
    'http_request_seconds',
    'Request duration',
    ['http_status', 'path', 'http_method', 'route'],
    { buckets: [0.001, 0.1, 0.3, 0.5, 0.8, 1, 3, 5, 10] }
  );

  prometheusInstance.newGauge('heap_used', 'Bytes of used heap');
  prometheusInstance.newGauge('heap_total', 'Bytes of total heap');

  return middleware;
}

module.exports = setupPrometheus;
