'use strict';

var properties = require('../package.json');
var distance = require('../service/distance');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getDistance: function(req, res) {
        distance.findDistance(req, res, function(err, dist){
            if(err)
                res.send(err);
            res.json(dist)
        });
    },
};

module.exports = controllers;