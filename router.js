const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Home Page</h1>');
});

router.get('/login', (req, res, next) => {
    res.send('<h1>Login Page</h1>');
});

router.get('/register', (req, res, next) => {
    res.send('<h1>Register Page</h1>');
});

router.all('*', (req, res, next) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

module.exports = router;