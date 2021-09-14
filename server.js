const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

// agregamos el serve que continene el index.html
app.use('/',serveStatic(path.join(__dirname,'/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('listening on port: ' + port)


require('dotenv').config({ path: './variables.env'});
//const uri = process.env.MONGODB_URI;

//const express2 = require('express');
//const app2 = express2();
//const bodyParser = require('body-parser');
//const PORT2 = 4000;
//const cors = require('cors');


//const mongoose = require('mongoose');
//const config = require('./DB.js');
//const config = require(DB);
//const postRoute = require('./api/post.route');


//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
 // () => { console.log('Database is connected') },
 // err => { console.log('Can not connect to the database'+ err)}
//);

//app.use(cors());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

//app.use('/posts', postRoute);

//app.listen(PORT2, function(){
//  console.log('Server is running on Port:',PORT2);
//});





