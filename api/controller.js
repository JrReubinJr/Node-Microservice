'use strict';

var properties = require('../package.json');
var distance = require('../service/distance');
var countries = require('../service/countries');

var controller = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getDistance: function(req, res) {
        distance.find(req, res, function(err, dist) {
            if (err) 
                res.send(err);
            res.json(dist);
        })
    },
    getCountries: function(req, res) {
        countries.find(req, res, function(err, name) {
            if (err)
                res.send(err);
            res.json(name)
        })
    }
};

module.exports = controller;
