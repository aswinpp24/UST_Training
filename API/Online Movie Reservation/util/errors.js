/**
 * Maintains all error codes
 * You may externalize this file and read it as JSON data at the time of initialization
 */
exports.errors = {
    // This is a catch all error
    // Ideally this should never be thrown
    UNKNOWN_ERROR: {
        code: 500,
        text: "Unknown error !!!",
        hints: ["Please contact development team wit information on 'how to reproduce this error'. Thank you for your help and support."],
        info: "http://developer.movieshub.com/unknownerror"
    },

    MOVIE_ALREADY_EXISTS: {
        code: 600,
        text: "Movie with the provided 'name' already exist",
        hints: ["Please use PUT for update instead of POST"],
        info: "http://developer.movieshub.com/errors#6000"
    },

    // All required/missing field errors start with number 7
    MISSING_MOVIE_NAME: {
        code: 701,
        text: "Required field movie 'name' is missing",
        hints: ["Please check that user has provided the non null value for 'name'"],
        info: "http://developer.movieshub.com/error#RequiredFields"
    },
    MISSING_MOVIE_SUMMARY: {
        code: 702,
        text: "Required field movie 'summary' is missing",
        hints: ["Please check that user has provided the non null value for summary"],
        info: "http://developer.movieshub.com/error#RequiredFields"
    },
    MISSING_MOVIE_LANGUAGE:
    {
        code: 703,
        text: "Required field movie 'language' is missing",
        hints: ["Please check that user has provided the non null value for language"],
        info: "http://developer.movieshub.com/error#RequiredFields"
    },
    // MISSING_MOVIE_RATING:
    // {
    //     code: 704,
    //     text: "Required field movie 'rating' is missing",
    //     hints: ["Please check that user has provided the value between 1 - 10"],
    //     info: "http://developer.movieshub.com/error#RequiredFields"
    // }
}

/**
 * Utility methods
 * Creates the error response body to be sent back to the caller
 */
exports.create = function (message, httpMethod, endpointInformation, errorList, receivedPayload) {
    return {
        // Meant for the developer 
        text: message,
        timestamp: new Date(),
        // POST, GET ....
        method: httpMethod,
        // Endpoint information
        endpoint: endpointInformation,
        // An array of all errors
        errors: errorList,
        // OPTIONAL - Use only during development
        payload: receivedPayload
    }
}

// Mongoose validation error types
exports.kinds = {
    REQUIRED: "required",
    NOT_VALID: "notvalid",
    NUMBER_ERROR: "Number",
    MIN_ERROR: "min",
    MAX_ERROR: "max",
}

