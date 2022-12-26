'use strict';


const express = require('express');
const { readAll, deleteOneRecord, createRecord } = require('../controllers/records.controller');

const recordRouter = express.Router();




recordRouter.get('/records', readAll);
recordRouter.delete('/records/:id', deleteOneRecord);
recordRouter.post('/records', createRecord);


module.exports = recordRouter;
