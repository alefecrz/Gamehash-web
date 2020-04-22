const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const RoomController = require('./controllers/RoomController');
const UserController = require('./controllers/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users', upload.single('profile') , UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.get('/users/remove/:_id', UserController.destroy);

routes.post('/rooms', RoomController.store);
routes.get('/rooms', RoomController.index);

module.exports = routes;