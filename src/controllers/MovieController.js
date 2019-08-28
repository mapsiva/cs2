'use strict'

const {Movie, Genre} = require ('../models');

module.exports = {
    async store (req, res) {
        const {name, year, genres} = req.body;

        console.log(name, year, genres);

        if (!name || !year){
            return res.json ({
                'error' : 'Name and Year are required!'
            });
        }
        
        const movie = await Movie.findOrCreate ({where : {name, year}});
 
        // adiciona ou atualiza generos do filme
        if (genres && genres.length > 0)
            // movie eh um vetor
            movie[0].setGenres (genres);

        return res.json(movie);
    },

    async index (req, res) {
        const movies = await Movie.findAll ({
            include : {
                model : Genre,
                as : 'genres',
                through : {attributes : []}
            }
        });

        return res.json (movies);
    },
    async update (req, res) {
        const {id} = req.params;
        const {name, year, genres} = req.body;

        if (!id) return res.json ({'error' : 'ID is missing!'});

        let movie = await Movie.findByPk (id);

        if(!movie) return res.json ({'error' : 'Movie not found!'});

        await Movie.update ({name, year}, {where :{id}});

        movie = await Movie.findByPk (id);

        // adiciona ou atualiza generos do filme
        if (genres && genres.length > 0)
            movie.setGenres (genres);

        return res.json (movie);
    },

    async delete (req, res) {
        const {id} = req.params;
        
        if (!id) return res.json ({'error' : 'ID is missing!'});

        let movie = await Movie.findByPk (id);

        if(!movie) return res.json ({'error' : 'Movie not found!'});

        movie.destroy();

        return res.json ({'message':'sucess'});
    }
};