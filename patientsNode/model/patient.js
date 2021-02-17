const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({
    patientId:{ type: Number, required: true },
    firstName:{ type: String, required: true },
    middleInit:{ type: String },
    lastName:{ type: String, required: true },
    surnameSuffix:{ type: String },
    gender:{ type: String, required: true },
    email:{ type: String, required: true },
    dob:{ type: Date, required: true },
    phoneNumberAreaCode:{ type: Number, required: true },
    phoneNumber:{ type: Number, required: true },
    preferredStoreNumber:{ type: Number, required: true },
    lastFilledStoreNumber:{ type: String, required: true },
    preferredPaymentMethod:{ type: String, required: true },
    previousFilledLastMile:{ type: String, required: true },
    addressLine1:{ type: String, required: true },
    city:{ type: String, required: true },
    zipCode:{ type: Number, required: true },
    state:{ type: String, required: true },
    cardType:{ type: String, required: true },
    creditCard:{ type: String, required: true },
    lastFourDigits:{ type: Number, required: true },
    expiryMonth:{ type: Number, required: true },
    expiryYear:{ type: Number, required: true },
    isDefault:{ type: Boolean, required: true ,default: true}
})
mongoose.pluralize(null);
const Patient = mongoose.model('tbf0_patient',PatientSchema);
module.exports = Patient