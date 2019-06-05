const movies = require('./movies')
const users = require('./users')

module.exports = {
    login:(req,res)=>{
        const {username,password} = req.body
        const foundUser = users.filter(user=>{
            return user.username === username && user.password === password
        })
        if(!foundUser[0]){
            return res.sendStatus(401)
        } 
        res.status(200).send(foundUser[0])
    },

    getMovies:(req,res)=>{
        res.send(movies)
    },

    getMovie:(req,res)=>{
        const {id} = req.params
        const foundMovie = movies.filter(movie=>{
            return movie.id === +id
        })
        res.status(200).send(foundMovie)
    }
}