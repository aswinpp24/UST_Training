// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://pp-todos:XsoNQwq9LTyhtNYsoFYrtV7SkrNHhY51gYQU3D3Avw5Ghbq2MBtFzBu4MyoyMQV0624kSb9xwxTMjWZ7BeQZYQ%3D%3D@pp-todos.mongo.cosmos.azure.com:10255/?ssl=true&appName=@pp-todos@", function (err, client) {
//   client.close();
// });

const MongoClient = require("mongodb").MongoClient;


module.exports = async function (context, req) {

    const URL = process.env.MONGODB_URL;
    const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

    const connection = await MongoClient.connect(URL);
    const todoCollection = connection.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const results = await todoCollection.find({}).toArray();

    await connection.close()

    return {
        body: JSON.stringify(results).replace(/_id/g, "id")
    }
}
