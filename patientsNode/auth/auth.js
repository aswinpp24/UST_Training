var error = require('../routes/error/error')
 
module.exports = (req, res, next) => {

    var responseString = '';
    try {
        const authorization = req.headers["auth"];

        if (authorization !== 'test') {
            responseString = error.getError(error.HttpStatusCodes.UNAUTHORIZED);
            res.status(error.HttpStatusCodes.UNAUTHORIZED).send(responseString);
        }
        else {
            next();
        }
 
    } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        responseString = error.getError(error.HttpStatusCodes.UNAUTHORIZED);
        res.status(error.HttpStatusCodes.UNAUTHORIZED).send(responseString);
    }
}