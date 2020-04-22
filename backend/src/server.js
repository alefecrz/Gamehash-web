const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const result = dotenv.config();

const routes = require('./routes');

const server = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@hashgame-spgcs.mongodb.net/gamehash?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

server.use(cors( ));
server.use(express.json());
server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
server.use(routes);

server.listen(8081);