var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var comparePoliticians = express.Router();

var politicianCompareArray = [];

var router = function (nav) {
    comparePoliticians.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/politicianTracker';
            mongodb.connect(url, function (err, db) {

                var collection = db.collection('politicians');
                collection.find({}).toArray(
                    function (err, results) {
                        res.render('comparePoliticians', {
                            results: results,
                            nav: nav,
                            politicianCompareArray: politicianCompareArray
                        });
                    });
            })
        });
       comparePoliticians.route('/:id')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/politicianTracker';
            mongodb.connect(url, function (err, db) {

                var collection = db.collection('politicians');
                collection.find({}).toArray(
                    function (err, results) {
                        res.render('comparePoliticians', {
                            results: results,
                            nav: nav
                        });
                    });
            })
        });
    return comparePoliticians;
};



module.exports = router;