const express = require('express');
const router = require('./router.js');

const app = express();
app.use(router);

app.listen(3000, () => {
    console.log("Server is running...");
    console.log("Paths:");
    console.log("http://localhost:3000/");
    console.log("http://localhost:3000/login");
    console.log("http://localhost:3000/register");
});