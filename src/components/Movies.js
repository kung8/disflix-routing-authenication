import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <div  style={{ border: 'black solid 1px' }}>
                        <h1>{movie.title}</h1>
                        <h1>{movie.year}</h1>
                        <img src={movie.image} alt="" />
                    </div>
                </Link>
            )
        })
        return (
            <div>
                {mappedMovies}
            </div>
        )
    }
}