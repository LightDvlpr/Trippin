const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;
const seed = require('../seed');

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    POST   /user -> creates new user (registering)
//    GET    /users/:id
//    PUT    /user/:id
//    DELETE /user/:id 

// Note to self:
//  {x, y} = foo;
//  x = foo.x;
//  y = foo.y;

seed()

router.get('/', (req,res) => {
    User.findAll({})
        .then(users => res.json(users));
});

module.exports = router;