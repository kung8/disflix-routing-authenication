const express = require('express')
const ctrl = require('./controller/controller')

const app = express()
app.use(express.json()) //req.body is able to be read 

const SERVER_PORT = 5000

//ENDPOINTS
//LOGIN
app.post('/api/login',ctrl.login)
//GET MOVIES
app.get('/api/getmovies',ctrl.getMovies)
//GET MOVIE
app.get('/api/getmovie/:id',ctrl.getMovie)

app.listen(SERVER_PORT,()=>console.log(`Keep it up on ${SERVER_PORT}`))