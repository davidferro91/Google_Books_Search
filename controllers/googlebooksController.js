require("dotenv").config();
const keys = require("../keys.js");

const db = require("../models");
const axios = require("axios");

// Defining methods for googlebooksController
module.exports = {
  findAll: function(req, res) {
    db.GoogleBook
      .find(req.query)
      .sort({ date: -1 })
      .then(dbGoogleBook => res.json(dbGoogleBook))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.GoogleBook
      .findById(req.params.id)
      .then(dbGoogleBook => res.json(dbGoogleBook))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.GoogleBook
      .create(req.body)
      .then(dbGoogleBook => res.json(dbGoogleBook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.GoogleBook
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbGoogleBook => res.json(dbGoogleBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.GoogleBook
      .findById({ _id: req.params.id })
      .then(dbGoogleBook => dbGoogleBook.remove())
      .then(dbGoogleBook => res.json(dbGoogleBook))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const APIKEYSETUP = "&key=";
    const query = req.params.query;
    axios
      .get(BASEURL + query + APIKEYSETUP + keys.googleAPI.apiKey)
      .then(response => res.json(response))
      .catch(err => res.status(422).json(err));
  }
};
