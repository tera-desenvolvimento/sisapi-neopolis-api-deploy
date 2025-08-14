const driverModel = require('../../models/driver.model');

async function removeDriver(id) {
    try {
        await driverModel.findByIdAndDelete(id);

        return {
            status: 200,
            message: 'Driver removed successfully'
        };
    } catch (error) {
        return {
            status: 200,
            message: 'Error removing driver',
            error: error.message
        };
    }
}

module.exports = removeDriver;