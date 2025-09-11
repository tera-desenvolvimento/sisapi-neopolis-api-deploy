require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");
const connectDB = require("./modules/databaseConnection.module");

const userRoutes = require("./routes/user.routes");
const exameRoutes = require("./routes/exame.routes");
const exameTypeRoutes = require("./routes/exameType.routes");
const driverRoutes = require('./routes/driver.routes');
const tripDestinationRoutes = require('./routes/tripDestination.routes');
const tripRoutes = require('./routes/trip.routes');
const vehicleRoutes = require('./routes/vehicle.routes');
const fixedTripRoutes = require('./routes/fixedTrip.routes');
const tripRequestRoutes = require('./routes/tripRequest.routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function startApp() {
    await connectDB();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        app.use(CORS());
        next();
    })

    const PORT = process.env.PORT || 3001;

    app.get('/', (req, res) => {
        res.json({
            status: 200,
            message: 'API INITIALIZED',
        })
    })

    app.use(userRoutes);
    app.use(exameRoutes);
    app.use(exameTypeRoutes);
    app.use(driverRoutes);
    app.use(tripDestinationRoutes);
    app.use(tripRoutes);
    app.use(vehicleRoutes);
    app.use(fixedTripRoutes);
    app.use(tripRequestRoutes);

    app.listen(PORT);
}

startApp();