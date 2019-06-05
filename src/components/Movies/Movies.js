import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Movies.css'

export default class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('/api/getmovies').then(res => {
            this.setState({
                movies: res.data
            })
        })
    }

    render() {
        const mappedMovies = this.state.movies.map(movie => {
            return (
                <Link key={movie.id} to={`/movies/${movie.id}`} style={{textDecoration:'none'}}>
                    <div className='movies'>
                        <div className='movie-text'>
                            <h1>{movie.title}</h1>
                            <h1>{movie.year}</h1>
                        </div>
                        <img src={movie.image} style={{marginBottom:20}} alt="" height='200px' width='150px'/>
                    </div>
                </Link>
            )
        })
        return (
            <div className='movie-body'>
                <div className='mapped-movies'>
                    {mappedMovies}
                </div>
            </div>
        )
    }
}