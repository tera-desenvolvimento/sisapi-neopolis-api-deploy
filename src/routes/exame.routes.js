const router = require('express').Router();

const createExame = require('../controllers/exame/createExame.controller');
const listExmaes = require('../controllers/exame/listExames.controller');
const deliverExame = require('../controllers/exame/deliverExame.controller');
const updateExame = require('../controllers/exame/updateExame.controller');
const listDeliveredExames = require("../controllers/exame/listDeliveredExames.controller");
const notifyPacient = require('../controllers/exame/notifyPacient.controller');

router.post('/exame/create', async (req, res) => {
    const { docId, type, patientName, patientNumber } = req.body;

    if (!docId || !type || !patientName || !patientNumber) {
        return res.status(400).json({
            status: 400,
            message: "All fields are required",
        });
    }

    const exameCreated = await createExame(req.body);

    return res.status(exameCreated.status).json(exameCreated);

});

router.get('/exame/list', async (req, res) => {
    const exames = await listExmaes();
    return res.status(exames.status).json(exames);
})

router.put('/exame/deliver', async (req, res) => {
    const { exameId, retiranteDocId, retiranteName } = req.body;

    const exameUpdated = await deliverExame(req.body);

    return res.status(exameUpdated.status).json(exameUpdated);
})

router.put('/exame/update', async (req, res) => {
    const { exameId, docId, type, arrivedDate, patientName, patientNumber } = req.body;

    const exameUpdated = await updateExame(req.body);

    return res.status(exameUpdated.status).json(exameUpdated);
})

router.get('/exame/listDeliveredExames', async (req, res) => {
    const deliveredExames = await listDeliveredExames();
    return res.status(deliveredExames.status).json(deliveredExames);
})

router.post('/exame/notifyPacient', async (req, res) => {
    const { exameId } = req.body;

    const notificationSent = await notifyPacient(req.body);
    
    return res.json(notificationSent);
})

module.exports = router;