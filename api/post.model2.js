// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Prueba = new Schema({
    producto: {
      type: String
    },
    cantidad: {
      type: String
    },
    precio: {
      type: String
    }
  },{
      collection: 'prueba'
  });
  
  module.exports = mongoose.model('Prueba',Prueba);