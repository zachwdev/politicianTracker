var express = require('express'),
    mongodb = require('mongodb').MongoClient,
    objectID = require('mongodb').ObjectID,
    politicians = express.Router();

var router = function (nav) {
    politicians.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/politicianTracker';
            mongodb.connect(url, function (err, db) {

                var collection = db.collection('politicians');
                collection.find({}).toArray(
                    function (err, results) {
                        res.render('politicians', {
                            results: results,
                            nav: nav
                        });
                    });
            })
        });
    politicians.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            var url = 'mongodb://localhost:27017/politicianTracker';
            mongodb.connect(url, function (err, db) {

                var collection = db.collection('politicianDetails');
                collection.findOne({
                        candidate_id: id
                    },
                    function (err, results) {
                        res.render('politician', {
                            results: results,
                            nav: nav
                        })
                    });
            })

        });
    return politicians;
};



module.exports = router;