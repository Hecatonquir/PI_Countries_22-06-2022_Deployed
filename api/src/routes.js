const express = require('express');
const server = express.Router();
const { getCountries, createActivity, getActivity, getCountriesById } = require('./functions');

server.use(express.json());

server.get('/countries', getCountries);
server.get('/countries/:id', getCountriesById);
server.post('/activities', createActivity);
server.get('/getactivities', getActivity);

module.exports = server;
