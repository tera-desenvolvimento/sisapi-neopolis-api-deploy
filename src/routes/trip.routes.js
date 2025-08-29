const router = require('express').Router();

const createTrip = require('../controllers/trip/createTrip.controller');
const listTrips = require('../controllers/trip/listTrips.controller');
const updateTrip = require('../controllers/trip/updateTrip.controller');
const removeTrip = require('../controllers/trip/removeTrip.controller');
const addPatient = require('../controllers/trip/addPatient.controller');
const findTrip = require('../controllers/trip/findTrip.controller');
const notifyPacient = require('../controllers/trip/notifyPacient.controller');

router.post('/trip/create', async (req, res) => {
    const { date } = req.body;
    const result = await createTrip(date);
    res.json(result);
});

router.post('/trip/list', async (req, res) => {
    const { date } = req.body;
    const result = await listTrips(date);
    res.json(result);
});

router.get('/trip/:id', async (req, res) => {
    const { id } = req.params;
    const result = await findTrip(id);
    res.json(result);
});

router.put('/trip/update/:id', async (req, res) => {
    const { id } = req.params;
    const { updates } = req.body;
    const result = await updateTrip(id, updates);
    res.json(result);
});

router.delete('/trip/remove/:id', async (req, res) => {
    const { id } = req.params;
    const result = await removeTrip(id);
    res.json(result);
});

router.post('/trip/addPatient/:id', async (req, res) => {
    const { id } = req.params;
    const { patientData } = req.body;
    const result = await addPatient(id, patientData);
    res.json(result);
});

router.post('/trip/notifyPatient', async (req, res) => {
    const { tripId, patientNumber, patientName } = req.body;
    const result = await notifyPacient(tripId, patientNumber, patientName);
    res.json(result);
});

module.exports = router;