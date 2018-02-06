var mongo = require('mongodb').MongoClient;
var chalengemodel = require('../models/challenge.model');

const challengeModel = mongo.Model(chalengemodel);