const router = require('express').Router();

const createTripRequest = require('../controllers/tripRequest/createTripRequest.controller');
const listTripRequests = require('../controllers/tripRequest/listTripRequests.controller');
const getTripRequestByCar = require('../controllers/tripRequest/getTripRequestByCar.controller');

router.post('/trip/request/carRequests', async (req, res) => {
    const { tripDate, exitTime } = req.body;
    const requests = await getTripRequestByCar(tripDate, exitTime);

    return res.status(200).json(requests);
});

router.post('/trip/request/create', async (req, res) => {
    const requestCreated = await createTripRequest(req.body);

    return res.status(200).json(requestCreated);
});

router.get('/trip/request/list', async (req, res) => {
    const requests = await listTripRequests();

    return res.status(200).json(requests);
});

module.exports = router;