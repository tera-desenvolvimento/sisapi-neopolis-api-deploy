const router = require('express').Router();

const createVehicle = require('../controllers/vehicle/createVehicle.controller');
const listVehicles = require('../controllers/vehicle/listVehicles.controller');
const updateVehicle = require('../controllers/vehicle/updateVehicle.controller');
const removeVehicle = require('../controllers/vehicle/removeVehicle.controller');

router.post('/vehicle/create', async (req, res) => {
    const { description, plate, inspectionStatus, inspectionDetails } = req.body;
    const newVehicle = await createVehicle(description, plate, inspectionStatus, inspectionDetails);
    res.status(200).json(newVehicle);
});

router.get('/vehicle/list', async (req, res) => {
    const vehicles = await listVehicles();
    res.status(200).json(vehicles);
});

router.put('/vehicle/update/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const updatedVehicle = await updateVehicle(id, updateData);
    res.status(200).json(updatedVehicle);
});

router.delete('/vehicle/remove/:id', async (req, res) => {
    const { id } = req.params;
    const deletedVehicle = await removeVehicle(id);
    res.status(200).json(deletedVehicle);
});

module.exports = router;