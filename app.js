'use strict';

const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const hostname = '0.0.0.0';
const port = process.env.PORT;
const cors = require('cors');
const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(cors());
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})

const rootController = require('./routes/index');
const comicsController = require('./routes/comics');

app.use('/', rootController);
app.use('/comics', comicsController);