#Craig's UW Test Project ![CircleCI Build Status](https://circleci.com/gh/craigtaub/craig-uw-test-project.png?circle-token=:circle-token&style=shield)
## Build and run app (http://localhost:3000/)

    docker build -t craigtaub/craig-uw-test-project .
    docker run -p 3000:3000 -d craigtaub/craig-uw-test-project

## Prometheus client

    docker run -p 9090:9090 -d -v /<this-dir>/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus -config.file=/etc/prometheus/prometheus.yml

## Grafana client (http://localhost:3001/dashboard/db/prometheus-stats)

    docker run -p 3001:3000 -d grafana/grafana

## Issues
- Not a mounted volume
