const express = require('express');
const routes = express.Router();
const multer = require('multer');
const uploadConfig = require('./config/Upload');
const PropertyController = require('../src/controllers/PropertyController');
const PropertyImageController = require('../src/controllers/PropertyImageController');


const upload = multer(uploadConfig);

routes.post('/property', upload.array('thumbnail', 5), PropertyController.store);
routes.get('/property', PropertyController.index);
routes.post('/property/:id', PropertyController.update);

routes.get('/images', PropertyImageController.index);

module.exports = routes;