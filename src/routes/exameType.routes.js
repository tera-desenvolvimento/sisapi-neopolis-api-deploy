const router = require('express').Router();

const createExameType = require('../controllers/exameType/createExameType.controller');
const listExameTypes = require('../controllers/exameType/listExameTypes.controller');
const removeExameType = require('../controllers/exameType/removeExameType.controller');

router.post('/exameType/add', async (req, res) => {
    const { type } = req.body;
    const result = await createExameType(type);
    res.status(result.status).json(result);
});

router.get('/exameType/list', async (req, res) => {
    const exameTypes = await listExameTypes();
    return res.status(exameTypes.status).json(exameTypes);
});

router.delete('/exameType/remove/:id', async (req, res) => {
    const { id } = req.params;
    const result = await removeExameType(id);
    res.status(result.status).json(result);
});

module.exports = router;
