const router = require('express').Router();

const createDriver = require('../controllers/driver/createDriver.controller');
const listDrivers = require('../controllers/driver/listDrivers.controller');
const updateDriver = require('../controllers/driver/updateDriver.controller');
const removeDriver = require('../controllers/driver/removeDriver.controller');

router.post('/driver/create', async (req, res) => {
  const driverData = req.body;
  const newDriver = await createDriver(driverData);
  res.json(newDriver);
});

router.get('/driver/list', async (req, res) => {
  const drivers = await listDrivers();
  
  res.json(drivers);
});

router.put('/driver/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, nickName, docId } = req.body;

  const updatedDriver = await updateDriver(id, name, nickName, docId);
  res.json(updatedDriver);
});

router.delete('/driver/remove/:id', async (req, res) => {
  const { id } = req.params;

  const driverData = await removeDriver(id);
  res.send(driverData);
});

module.exports = router;