const express = require('express');
const app = express();

app.get("/", (req, res) => {
res.send('Hello, world!');
});

app.get('/user', (req, res) => {
const userId = req.query.id;
res.send(`User ID is ${userId}`);
});

app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});