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

        var fields = {}
        if (req.query && req.query.fields !== undefined) {
            fields = createFields(req.query.fields)
        }


        //paginations
        var pagination = { limit: 2, offset: 1 }
        if (req.query && req.query.limit !== undefined) {
            // checks should be made that limit is a number
            pagination.limit = req.query.limit
        }
        if (req.query && req.query.offset !== undefined) {
            // checks should be made that limit is a number
            pagination.offset = req.query.offset
        }

        //pagination Setup options
        var options = { fields: fields, pagination: pagination }
        console.log(options)



        // Setup query criteria
        var criteria = { currentlyPremiering: true }

        // execute the query
        db.select(criteria, options, function (err, docs) {

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
                var userError = processMongooseErrors(apiMessages.errors.API_MESSAGE_CREATE_FAILED, "POST", URI, err, {});
                res.setHeader('content-type', 'application/json')
                res.status(400).send(userError)
            } else {
                res.send(saved)
            }
        });
    });



    router.route(URI).put(function (req, res, next) {
        console.log("update data")
        var criteria = { _id: '5fe9f5d6e847ee10d894b150' }
        var doc = req.body;
        db.update(criteria, doc, function (err, updated) {
            if (err) {
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                console.log("updated movies = %d", updated.length)
                res.send(updated)
            }
        });
    });

    router.route(URI).delete(function (req, res, next) {
        console.log("Remove Movie")
        var criteria = { name: "Bitten" }
        db.delete(criteria, function (err, deleted) {
            if (err) {
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                console.log("Deleted movies = %d", deleted.length)
                res.send(deleted)
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


    if (err.errors.summary) {
        if (err.errors.summary.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_MOVIE_SUMMARY)
        }
    }


    if (err.errors.language) {
        if (err.errors.language.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_MOVIE_LANGUAGE)
        }
    }

    // if (err.errors.details_rating) {
    //     if (err.errors.details_rating.kind === apiErrors.kinds.REQUIRED) {
    //         errorList.push(apiErrors.errors.MISSING_MOVIE_RATING)
    //     }
    // }

    return errorList;
}
