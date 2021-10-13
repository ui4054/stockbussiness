// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const PORT = 80;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
//const config = require(DB);
const postRoute = require('./post.route2');
const uri = process.env.MONGODB_URI;

// variables de entorno locales - dptnev se inactiva en despliegue remoto
//require('dotenv').config({ path: './variables.env'});
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/posts', postRoute);// esta es la ruta que conecta al backend

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});