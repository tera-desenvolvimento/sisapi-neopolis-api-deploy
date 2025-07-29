const mongoose = require("mongoose");

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.set("strictQuery", true);

const connection = mongoose.connect(process.env.MONGO_CONNECTION_URL, connectionParams)
    .then(() => {
        console.log("Successfully connected to MongoDB Server");
    })
    .catch(err => {
        console.log("Error while connecting to MongoDB Server", err);

    })

module.exports = connection;