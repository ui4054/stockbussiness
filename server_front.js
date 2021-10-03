//front end server
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

// conectamos base de datos
const bodyParser = require('body-parser');
const cors = require('cors');
//require('dotenv').config({ path: './variables.env'});
//const mongoose = require('mongoose');
//const postRoute = require('./post.route');
//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
 // () => { console.log('Database is connected') },
 // err => { console.log('Can not connect to the database'+ err)}
//);

// agregamos el serve que continene el index.html
app.use('/',serveStatic(path.join(__dirname,'/dist')))
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// habilita servidor
//app.use('/posts', postRoute);
const port = process.env.PORT || 7079
app.listen(port,function(){
    console.log('listening on port: ' + port);
});
