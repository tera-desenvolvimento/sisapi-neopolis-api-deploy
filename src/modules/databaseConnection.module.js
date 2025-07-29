const mongoose = require("mongoose");

const connectionParams = {
    connectTimeoutMS: 10000,
    serverSelectionTimeoutMS: 10000
};

mongoose.set("strictQuery", true);
mongoose.set('bufferCommands', false);

const connection = mongoose.connect(process.env.MONGO_CONNECTION_URL, connectionParams)
    .then(() => {
        console.log("Successfully connected to MongoDB Server");
    })
    .catch(err => {
        console.log("Error while connecting to MongoDB Server", err);

    })

module.exports = connection;