const router = require('express').Router();

const createFixedTrip = require("../controllers/fixedTrip/createFixedTrip.controller");
const updateFixedTrip = require("../controllers/fixedTrip/updateFixedTrip.controller");
const addPatient = require("../controllers/fixedTrip/addPatiend.controller");
const listFixedTrips = require("../controllers/fixedTrip/listFixedTrips.controller");
const removeFixedTrip = require("../controllers/fixedTrip/removeFixedTrip.controller");
const notifyPacient = require("../controllers/fixedTrip/notifyPatient.controller");
const findTrip = require("../controllers/fixedTrip/findFixedTrip.controller")

router.get("/trip/fixed/create", async (req, res) => {
    const result = await createFixedTrip();
    res.json(result);
});

router.put("/trip/fixed/update/:id", async (req, res) => {
    const { id } = req.params;
    const { updates } = req.body;

    const result = await updateFixedTrip(id, updates);
    res.json(result);
});

router.post("/trip/fixed/addPatient/:id", async (req, res) => {
    const { id } = req.params;
    const { patientData } = req.body;

    const result = await addPatient(id, patientData);
    res.json(result);
});

router.get("/trip/fixed/list", async (req, res) => {
    const result = await listFixedTrips();

    res.json(result);
});

router.delete("/trip/fixed/remove/:id", async (req, res) => {
    const { id } = req.params;

    const result = await removeFixedTrip(id);

    res.json(result);
})

router.post('/trip/fixed/notifypatient', async (req, res) => {
    const { tripId, patientNumber, patientName, destination } = req.body;
    const result = await notifyPacient(tripId, patientNumber, patientName, destination);
    res.json(result);
});

router.get('/trip/fixed/:id', async (req, res) => {
    const { id } = req.params;
    const result = await findTrip(id);
    res.json(result);
})

module.exports = router;