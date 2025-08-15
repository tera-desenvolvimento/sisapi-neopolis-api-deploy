const router = require('express').Router();

const createTripDestination = require('../controllers/tripDestination/createTripDestination.controller');
const listTripDestinations = require('../controllers/tripDestination/listTripDestination.controller');
const removeTripDestination = require('../controllers/tripDestination/removeTripDestination.controller');

router.post('/tripDestination/create', async (req, res) => {
    const { location } = req.body;
    const result = await createTripDestination(location);
    res.status(result.status).json(result);
});

router.get('/tripDestination/list', async (req, res) => {
    const result = await listTripDestinations();
    res.status(result.status).json(result);
});

router.delete('/tripDestination/remove/:id', async (req, res) => {
    const { id } = req.params;
    const result = await removeTripDestination(id);
    res.status(result.status).json(result);
});

module.exports = router;