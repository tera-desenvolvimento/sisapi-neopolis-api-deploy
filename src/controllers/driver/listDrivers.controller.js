const driverModel = require('../../models/driver.model');

async function listDrivers() {
    try {
        const drivers = await driverModel.find();

        return {
            status: 200,
            drivers
        };
    } catch (error) {
        return{
            status: 500,
            message: 'Error fetching drivers',
            error: error.message
        };
    }
}

module.exports = listDrivers;
