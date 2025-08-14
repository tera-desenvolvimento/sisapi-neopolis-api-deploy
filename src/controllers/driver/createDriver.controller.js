const driverModel = require('../../models/driver.model');

async function createDriver(driverData) {
    try {
        const newDriver = await driverModel.create(driverData);

        return {
            status: 200,
            message: 'Driver created successfully',
            driver: newDriver
        };
    } catch (error) {
        return {
            status: 200,
            message: 'Error creating driver',
            error: error.message
        };
    }
};

module.exports = createDriver;
