const router = require('express').Router();
const JWT = require('jsonwebtoken');

const createUser = require('../controllers/createUser.controller');
const listUsers = require('../controllers/listUsers.controller');
const findUser = require('../controllers/findUser.controller');
const authenticateUser = require('../controllers/authenticate.controller');
const checkSession = require('../controllers/checkSession.controller');
const toggleActivateUser = require('../controllers/toggleActivateUser.controller');

const validateEmail = require('../modules/validateEmail.module');
const validatePassword = require('../modules/validatePassword.module');

router.post('/user/create', async (req, res) => {
    const { docId, name, email, role, password } = req.body;

    if (!docId || !name || !email || !role || !password) {
        return res.status(400).json({
            status: 400,
            message: "All fields are required",
        });
    } else if (!validateEmail(email)) {
        return res.status(400).json({
            status: 400,
            message: "Invalid email format",
        });
    } else if (!validatePassword(password)) {
        return res.status(400).json({
            status: 400,
            message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        });
    }

    const userCreated = await createUser(req.body);

    return res.status(userCreated.status).json(userCreated);
})

router.get('/user/list', async (req, res) => {
    const users = await listUsers();
    return res.status(users.status).json(users);
})

router.get('/user/:docId', async (req, res) => {
    const { docId } = req.params;

    if (!docId || docId === "") {
        return res.status(400).json({
            status: 400,
            message: "docId is required",
        });
    }

    const userFound = await findUser(docId);

    return res.status(userFound.status).json(userFound);
})

router.post('/user/auth', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            message: "All fields are required",
        });
    } 

    const userAuthenticated = await authenticateUser(email, password);

    return res.status(userAuthenticated.status).json(userAuthenticated);
})

router.post('/user/checkSession', async (req, res) => {
    const { token } = req.body;

    if (!token || token === "") {
        return res.status(400).json({
            status: 400,
            message: "Token is required",
        });
    }

    const sessionChecked = await checkSession(token);

    return res.status(sessionChecked.status).json(sessionChecked);
})

router.put('/user/toggleActivate/:docId', async (req, res) => {
    const { docId } = req.params;

    if (!docId || docId === "") {
        return res.status(400).json({
            status: 400,
            message: "docId is required",
        });
    }

    const userToggled = await toggleActivateUser(docId);

    return res.status(userToggled.status).json(userToggled);
})

module.exports = router;