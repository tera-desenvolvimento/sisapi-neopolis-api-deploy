const driverModel = require('../../models/driver.model');

async function updateDriver(id, name, nickName, docId) {
    try {

        const updatedDriver = await driverModel.findByIdAndUpdate(id, {
            name,
            nickName,
            docId
        }, { new: false });

        return {
            status: 200,
            message: 'Driver updated successfully',
            driver: updatedDriver
        };
    } catch (error) {
        return {
            status: 500,
            message: 'Error updating driver',
            error: error.message
        };
    }
}

module.exports = updateDriver;
