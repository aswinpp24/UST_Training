var express = require('express');
var patientRouter = express.Router();
var error = require('./error/error');
var model = require('../model/patient')
var auth = require('../auth/auth')
const fs = require('fs');
 

patientRouter.post('/', [auth], async function (req, res) {
    var criteria = req.body;
    var responseString = '';
    try {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            responseString = error.getError(error.HttpStatusCodes.NOTFOUND);
            res.status(error.HttpStatusCodes.NOTFOUND).send(responseString);
        } else {
            const patientData = await model.findOne(criteria);
 
            if (patientData) {
                var result = transformResponseData(patientData);
                res.json(result);
            }
            else {
                responseString = error.getError(error.HttpStatusCodes.NOTFOUND);
                res.status(error.HttpStatusCodes.NOTFOUND).send(responseString);
            }
      
        }
    } catch (err) {
         responseString = error.getError(error.HttpStatusCodes.GENERICERROR);
        res.status(error.HttpStatusCodes.GENERICERROR).send(responseString);
    }






    function transformResponseData(result){
      // eslint-disable-next-line no-undef
    var contents = fs.readFileSync(__dirname+'/response.json'); // read the 'response.json' shema - and build the response accordingly
    var responseData = JSON.parse(contents);
    // console.log(result)
    ///var objectKeys = Object.keys(result);
    var objectKeys =Object.keys(result.schema.paths)
    // console.log(objectKeys)
    var customerShippingAddressObj = {};
    var profilePaymentDetails = {};

    //logger.logInfo("Start building response body..");

    for (var key in objectKeys) { // Iteratiing through mongodb result Obj properties

        if (responseData[objectKeys[key]] != undefined)
            responseData[objectKeys[key]] = result[objectKeys[key]];

        if (objectKeys[key] == "addressLine1" || objectKeys[key] == "city" || objectKeys[key] == "zipCode" || objectKeys[key] == "state") {

            customerShippingAddressObj[objectKeys[key]] = result[objectKeys[key]];
        }
        if (objectKeys[key] == "cardType" || objectKeys[key] == "creditCard" || objectKeys[key] == "lastFourDigits" || objectKeys[key] == "expiryMonth" || objectKeys[key] == "expiryYear"  || objectKeys[key] == "isDefault") {

            profilePaymentDetails[objectKeys[key]] = result[objectKeys[key]];
        }
    }

    responseData["customerShippingAddress"] = customerShippingAddressObj;
    responseData["profilePaymentDetails"] = [profilePaymentDetails];
    return responseData;


    }



    
});
module.exports = patientRouter;