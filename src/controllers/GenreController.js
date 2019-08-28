'use strict'

const {Genre} = require ('../models');

module.exports = {
    async store (req, res) {
        const {name} = req.body;

        console.log(name);

        if (!name){
            return res.json ({
                'error' : 'Name and Year are required!'
            });
        }
        
        const genre = await Genre.findOrCreate ({where : {name}});

        return res.json(genre);
    },

    async index (req, res) {
        const genres = await Genre.findAll ();

        return res.json (genres);
    },
    async update (req, res) {
        const {id} = req.params;
        const {name} = req.body;

        if (!id) return res.json ({'error' : 'ID is missing!'});

        let genre = await Genre.findByPk (id);

        if(!genre) return res.json ({'error' : 'Genre not found!'});

        await Genre.update ({name}, {where :{id}});

        genre = await Genre.findByPk (id);

        return res.json (genre);
    },

    async delete (req, res) {
        const {id} = req.params;
        
        if (!id) return res.json ({'error' : 'ID is missing!'});

        let genre = await Genre.findByPk (id);

        if(!genre) return res.json ({'error' : 'Genre not found!'});

        genre.destroy();

        return res.json ({'message':'sucess'});
    }
};