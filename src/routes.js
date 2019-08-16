const express = require('express');
const MovieController = require('./controllers/MovieController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
});

routes.post('/movies', MovieController.store);
routes.get('/movies', MovieController.index);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.delete);

module.exports = routes;