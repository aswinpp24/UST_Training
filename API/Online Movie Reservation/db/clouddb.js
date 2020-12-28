// /**
//  * Setup the Database URL
//  */

const DB_USER = "aswin";
const DB_PASSWORD = "aswin";
const DB_NAME = "movieshub";
const CLUSTER_HOST = "apidemo.jymaw.mongodb.net";

//DB Connection String

exports.DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

