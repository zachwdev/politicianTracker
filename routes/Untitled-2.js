var express = require('express'),
    mongodb = require('mongodb').MongoClient,
    objectID = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/politicianTracker';
mongodb.connect(url, function (err, db) {

    var collection = db.collection('politicianDetails');
    collection.findOne({
            candidate_id: 'P60007168'
        },
        function (err, results) {
            console.log(results);
        });
})

