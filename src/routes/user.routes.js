const router = require('express').Router();
const JWT = require('jsonwebtoken');

const createUser = require('../controllers/user/createUser.controller');
const listUsers = require('../controllers/user/listUsers.controller');
const findUser = require('../controllers/user/findUser.controller');
const authenticateUser = require('../controllers/user/authenticate.controller');
const checkSession = require('../controllers/user/checkSession.controller');
const toggleActivateUser = require('../controllers/user/toggleActivateUser.controller');
const requestPasswordRecovery = require('../controllers/user/requestPasswordRecovery.controller');
const resetPassword = require('../controllers/user/resetPassword.controller');
const sendEmail = require('../modules/sendEmail.module');

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
    const { docId, password } = req.body;

    if (!docId || !password) {
        return res.status(400).json({
            status: 400,
            message: "All fields are required",
        });
    } 

    const userAuthenticated = await authenticateUser(docId, password);

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

router.post('/user/requestPasswordRecovery', (req, res) => {
    const { email } = req.body;
    
    requestPasswordRecovery(email)
        .then(response => {
            res.json(response)
        })
        .catch(err => res.json(err))

})

router.post('/user/resetPassword', (req, res) => {
    const { userId, token, newPassword } = req.body;

    resetPassword(userId, token, newPassword)
        .then(response => {
            res.json(response)
        })
        .catch(err => res.json(err))
})

router.post('/user/sendEmail', (req, res) => {
    const { email, subject, text, html } = req.body;

    sendEmail(email, subject, text, html)
        .then(response => {
            res.json(response)
        })
        .catch(err => res.json(err))
})

module.exports = router;