/**
 * 
 * Model for the MoviesHub Package
 */

var settings = require('../db/settings')


var MoviesSchema = settings.mongoose.Schema(
    {
        name: { type: String, required: [true, 'name is needed'] },
        summary: { type: String, required: true },
        language: { type: String, required: true },
        genres: { type: String, enum: ['Drama', 'Science-Fiction', 'Thriller', 'Action', 'Romance'] },
        details: { runtime: { type: Number, required: true }, rating: { type: Number, required: true, min: 1, max: 10 } },
        pictures: { type: [String] },
        currentlyPremiering: { type: Boolean, required: true, default: true }
    }
);

// Export the model
exports.Movies = settings.mongoose.model('movie', MoviesSchema)