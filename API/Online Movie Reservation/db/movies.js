/**
 * All database operations related to the movies collection will reside in this file
 */
var model = require('../models/movies')
var settings = require('../db/settings')

// CREATE the movie details
exports.save = function (data, callback) {

    new model.Movies(data).save(function (err, inserted) {
        callback(err, inserted)

    })
}

// CREATE multiple movies details
exports.saveMany = function (rows, callback) {

    model.Movies.insertMany(rows, function (err, docs) {
        callback(err, docs)
    })

}

// UPDATE the movies

exports.update = function (criteria, doc, callback) {
    // Replaced .update() with .updateMany() as .update() is deprecated
    model.Movies.updateMany(criteria, doc, function (err, data) {
        callback(err, data)

    })
}

// RETRIEVE movie based on criteria
exports.select = function (criteria, callback) {
    model.Movies.find(criteria, function (err, data) {
        callback(err, data)
    })
}

//retrieve fields based on criteria, pagination and offset
exports.select = function (criteria, options, callback) {

    // Local variable for capturing limit & offset
    var lim = 0
    var off = 0
    if (options.pagination !== undefined) {
        if (options.pagination.limit !== undefined) lim = parseInt(options.pagination.limit)
        if (options.pagination.offset !== undefined) off = parseInt(options.pagination.offset)
    }

    model.Movies.find(criteria, function (err, data) {
        callback(err, data)
    }).select(options.fields).limit(lim).skip(off)
}