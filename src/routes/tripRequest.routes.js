const router = require('express').Router();

const createTripRequest = require('../controllers/tripRequest/createTripRequest.controller');
const listTripRequests = require('../controllers/tripRequest/listTripRequests.controller');
const getTripRequestByCar = require('../controllers/tripRequest/getTripRequestByCar.controller');
const updateTripRequest = require('../controllers/tripRequest/updateTripRequest.controller');
const declineTripRequest = require('../controllers/tripRequest/declineTripRequest.controller');
const acceptTripRequest = require('../controllers/tripRequest/acceptTripRequest.controller');

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

router.put('/trip/request/update/:id', async (req, res) => {
    const { id } = req.params;
    const requestUpdated = await updateTripRequest(id, req.body);

    return res.status(200).json(requestUpdated);
});

router.put('/trip/request/decline/:id', async (req, res) => {
    const { id } = req.params;
    const { reason } = req.body;
    const requestDeclined = await declineTripRequest(id, reason);

    return res.status(200).json(requestDeclined);
});

router.put('/trip/request/accept/:id', async (req, res) => {
    const { id } = req.params;
    const { tripId } = req.body;
    const requestAccepted = await acceptTripRequest(id, tripId);

    return res.status(200).json(requestAccepted);
});

module.exports = router;