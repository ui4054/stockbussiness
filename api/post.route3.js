// post.model.js

const express = require('express');
const postRoutes = express.Router();

// Require Post model in our routes module
let modelo = require('./post.model');

// Defined store route
postRoutes.route('/nuevo').post(function (req, res) {
  let post = new modelo(req.body);
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route('/ver').get(function (req, res) {
    modelo.find(function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
});

// Defined edit route
postRoutes.route('/editar/:id').get(function (req, res) {
  let id = req.params.id;
  modelo.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});

//  Defined update route
postRoutes.route('/actualizar/:id').post(function (req, res) {
    modelo.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
        post.user = req.body.user;
        post.key = req.body.key;
        post.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/borrar/:id').delete(function (req, res) {
    modelo.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes;

