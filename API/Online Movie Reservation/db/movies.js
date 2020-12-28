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