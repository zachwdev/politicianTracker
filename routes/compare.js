var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var compare = express.Router();

var politicianCompareArray = [];

    
var router = function (nav) {
    compare.route('/')
        .get(function(req,res){
            res.render('compare',
                      {
                politicianCompareArray: politicianCompareArray,
                nav: nav
            })
    });
    compare.route('/:id')
        .get(function (req, res) {
            var id =  req.params.id
            var url = 'mongodb://localhost:27017/politicianTracker';
            mongodb.connect(url, function (err, db) {

                var collection = db.collection('politicians');
                collection.findOne({
                        candidate_id: id
                    },
                    function (err, results) {
                        res.render('compare', {
                            results: results,
                            compareArray: compareArray
                            
                        });
                    });
            })

        });

    return compare;
};



module.exports = router;