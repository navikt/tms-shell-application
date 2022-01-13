const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const getDecorator = require('./dekorator');
const basePath = '/min-side';
const buildPath = path.resolve(__dirname, '../dist');
const server = express();

server.set('views', `${__dirname}/../dist`);
server.set('view engine', 'mustache');
server.engine('html', mustacheExpress());

server.use(express.json());
server.use((req, res, next) => {
    res.removeHeader('X-Powered-By');
    next();
});

server.use(
    basePath,
    express.static(buildPath, {
        index: false,
    })
);

server.get(`${basePath}/internal/isAlive`, async (req, res) => {
    res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, async (req, res) => {
    res.sendStatus(200);
});

// Match everything except internal og static
server.use(/^(?!.*\/(internal|static)\/).*$/, (req, res) =>
    getDecorator()
        .then((fragments) => {
            res.render('index.html', fragments);
        })
        .catch((e) => {
            const error = `Failed to get decorator: ${e}`;
            res.status(500).send(error);
        })
);

const port = 7150;
server.listen(port, () => console.log(`Listening on port ${port}`));
