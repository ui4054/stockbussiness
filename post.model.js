// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);

//---------------
let Usuario = new Schema({
  user: {
    type: String
  },
  key: {
    type: String
  }
},{
    collection: 'usuarios'
});

module.exports = mongoose.model('Usuario', Usuario);

//--------------codigo para modelo de producto
let Producto = new Schema({
  nombre: {
    type: String
  },
  marca: {
    type: String
  },
  cantidad: {
    type: String
  },
  precio: {
    type: String
  }


},{
    collection: 'productos'
});

module.exports = mongoose.model('Producto', Producto);

//--------------codigo para modelo de producto
l//et ProductoNancy = new Schema({
  //nombre: {
    //type: String
  //},
  //descrip: {
    //type: String
  //},
  //precio: {
    //type: String
  //},
  //cantidad: {
    //type: String
  //}


//},{
    //collection: 'productos_nancy'
//});

//module.exports = mongoose.model('ProductoNancy', ProductoNancy);











