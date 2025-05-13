require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const userRoutes = require("./routes/user.routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    app.use(CORS());
    next();
})

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'API INITIALIZED',
    })
})

app.use(userRoutes);

require("./modules/databaseConnection.module");

app.listen(PORT);