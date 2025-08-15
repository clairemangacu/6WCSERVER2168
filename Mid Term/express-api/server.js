const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    res.json({ breed: 'This is JSON data', time: new Date() });
});

app.get('/dog', (req, res) => {
    const breed = req.query.breed || 'Guest';
    res.json({
        breed: `${breed}!`,
        info: `Information about ${breed} breed. `
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
