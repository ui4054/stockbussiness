// backend server
//front end server
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

// agregamos el serve que continene el index.html
app.use('/',serveStatic(path.join(__dirname,'/dist')))



const port = process.env.PORT || 8080
const host = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 4000
app.listen(port,host)

console.log('listening on port: ' + port)



const express2 = require('express');
const app2 = express2();
const bodyParser2 = require('body-parser');
const PORT2 = 4000;
const HOST = '0.0.0.0';
const cors2 = require('cors');
const mongoose = require('mongoose');
//const config = require('./DB.js');
//const config = require(DB);
const postRoute = require('./post.route');
const uri = process.env.MONGODB_URI;

// variables de entorno locales
//require('dotenv').config({ path: './variables.env'});
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
 () => { console.log('Database is connected') },
 err => { console.log('Can not connect to the database'+ err)}
);

// use the express-static middleware
app2.use(express.static("public"));
app2.use(cors2());
app2.use(bodyParser2.urlencoded({extended: true}));
app2.use(bodyParser2.json());
app2.use('/posts', postRoute);

app2.listen(PORT2,host, function(){
console.log('Server is running on Port:',PORT2);
});












