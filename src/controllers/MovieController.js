const Movies = require ('../models/Movies');
const Genres = require ('../models/Genres');

module.exports = {
    async store (req, res) {
        const {name, year, genres} = req.body;

        console.log(name, year);

        if (!name || !year){
            return res.json ({
                'error' : 'Name and Year are required!'
            });
        }
        
        const movie = await Movies.findOrCreate ({where : {name, year}});

        // 

        return res.json(movie);
    },

    async index (req, res) {
        const movies = await Movies.findAll ();

        return res.json (movies);
    },
    async update (req, res) {
        const {id} = req.params;
        const {name, year} = req.body;

        if (!id) return res.json ({'error' : 'ID is missing!'});

        let movie = await Movies.findByPk (id);

        if(!movie) return res.json ({'error' : 'Movie not found!'});

        await Movies.update ({name, year}, {where :{id}});

        movie = await Movies.findByPk (id);

        return res.json (movie);
    },

    async delete (req, res) {
        const {id} = req.params;
        
        if (!id) return res.json ({'error' : 'ID is missing!'});

        let movie = await Movies.findByPk (id);

        if(!movie) return res.json ({'error' : 'Movie not found!'});

        movie.destroy();

        return res.json ({'message':'sucess'});
    }
};