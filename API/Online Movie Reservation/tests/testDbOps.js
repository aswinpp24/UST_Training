/**
 * Simple tests for all DB operations
 * 
 * 
 */


// Setup the DB_URI
process.env.DB_URI = require("../db/clouddb").DB_URI

//Test#1  Insert the movie data
var db = require('../db/movies')
var data = require('../data/movies')


// Save a single row
db.save(data.SingleRow, function (err, saved) {
    if (err) {
        console.log("Failed single row save")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Save single row - %s", saved.name)
    }
});

// Save multiple rows
db.saveMany(data.MultipleRows, function (err, docs) {
    if (err) {
        console.log("Failed multiple row insert")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Multiple rows inserted - %d", docs.length)
    }
});

// Select movies with some criteria
var selectCriteria = { "details.runtime": { $gt: 120 } }
db.select(selectCriteria, function (err, data) {
    if (err) {
        console.log("Failed to get movies : %s", criteria)
        console.log(err)
    } else {
        console.log("Successfully selected %d documents for %s", data.length, JSON.stringify(selectCriteria))
    }
});

// Update the vacations
var updateCriteria = { name: 'Bitten' }
var doc = { description: 'UPDATED Desc for TESTING' }
db.update(updateCriteria, doc, function (err, doc) {
    if (err) {
        console.log("Failed to get update")
        console.log(err)
    } else {
        console.log("Successfully updated with criteria %s", updateCriteria)
    }
})
