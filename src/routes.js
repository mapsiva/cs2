const express = require('express');
const MovieController = require('./controllers/MovieController');
const GenreController = require('./controllers/GenreController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
});

routes.post('/movies', MovieController.store);
routes.get('/movies', MovieController.index);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.delete);

routes.post('/genres', GenreController.store);
routes.get('/genres', GenreController.index);
routes.put('/genres/:id', GenreController.update);
routes.delete('/genres/:id', GenreController.delete);

module.exports = routes;