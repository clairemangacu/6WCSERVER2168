const express = require('express');
const app = express();
app.use(express.json());
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
},
{
    id: 3,
    title: 'Iron Man'
},
];



app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})