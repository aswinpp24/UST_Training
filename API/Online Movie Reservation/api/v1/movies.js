/**
 * Contains the definition of the API endpoints for movies packages
 * 
 */
// As a best practice keep the resource name same as the file name
var RESOURCE_NAME = 'movies';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME;

// Setup the movies db
var db = require('../../db/movies')
//Error Info
var apiErrors = require('../../util/errors')
var apiMessages = require('../../util/messages')

module.exports = function (router) {
    'use strict';

    // RETRIEVE all premiering movies

    //    /v1/movies
    router.route(URI).get(function (req, res, next) {
        console.log("GET Movies")
        //1. Setup query criteria
        var criteria = { currentlyPremiering: true }

        //2. execute the query
        db.select(criteria, function (err, docs) {

            if (err) {
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if (docs.length == 0) {
                    res.status(404)
                }
                console.log("Retrieved movies = %d", docs.length)
                res.send(docs)
            }
        });
    });

    // CREATE new movie details
    router.route(URI).post(function (req, res, next) {
        console.log("POST  Movies")

        //1. Get the data
        var doc = req.body;

        //2. Call the insert method
        db.save(doc, function (err, saved) {
            if (err) {
                // The returned error need to be defined better - in this example it is being left as is
                res.status(400).send(err)
            } else {
                res.send(saved)
            }
        });
    });
}



/**
 * Converts the Mongoose validation errors to API specific errors
 */
var processMongooseErrors = function (message, method, endpoint, err, payload) {
    var errorList = []
    // Check for validation error
    if (err.name === 'ValidationError') {
        errorList = processValidationErrors(err)
    } else if (err.code == 11000) {
        // it could be database error - 11000 is for duplicate key
        errorList.push(apiErrors.errors.MOVIE_ALREADY_EXISTS)
    } else {
        var errUnknown = apiErrors.errors.UNKNOWN_ERROR
        errUnknown.payload = err
        errorList = [apiErrors.errors.UNKNOWN_ERROR]
    }
    return apiErrors.create(message, method, endpoint, errorList, payload)
}

/**
 * Converts Mongoose errors to API specific errors
 */
var processValidationErrors = function (err) {
    var errorList = []

    // Check if name of the package is missing
    if (err.errors.name) {
        if (err.errors.name.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_MOVIE_NAME)
        }
    }

    // Check if description of the package is missing
    if (err.errors.summary) {
        if (err.errors.summary.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_MOVIE_SUMMARY)
        }
    }

    // Check if description of the package is missing
    if (err.errors.language) {
        if (err.errors.language.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_MOVIE_LANGUAGE)
        }
    }

    return errorList;
}
