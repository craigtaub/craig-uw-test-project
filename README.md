#Craig's UW Test Project ![CircleCI Build Status](https://circleci.com/gh/craigtaub/craig-uw-test-project.png?circle-token=:circle-token&style=shield)
## Build and run container

    docker build -t craigtaub/node-app .
    docker run -p 3000:3000 -d craigtaub/node-app

## CI
On commit will build at
## Issues
- Not mounted volume
