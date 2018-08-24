const express = require('express');
const router = express.Router();

const pgp = require("pg-promise")();
const db = pgp("postgres://igorfromtomsk:cegthgfhjkm42@localhost:54320/blog");

router.get('/posts', function(req, res, next) {
  db.any("SELECT * FROM posts")
    .then(function (data) {
      res.send({
        status: true,
        data: data
      });
    })
    .catch(function (error) {
      res.send({
        status: false,
        data: data
      });
    });
});

router.get('/last-posts', function(req, res, next) {
  db.any("SELECT * FROM posts ORDER BY id DESC LIMIT 1")
    .then(function (data) {
      res.send({
        status: true,
        data: data
      });
    })
    .catch(function (error) {
      res.send({
        status: false,
        data: data
      });
    });
});

module.exports = router;