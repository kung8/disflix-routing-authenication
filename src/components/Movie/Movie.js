import React, {Component} from 'react'
import axios from 'axios'
import './Movie.css'

export default class Movie extends Component {
    constructor(){
        super()
        this.state={
            movie:{}
        }
    }

    componentDidMount(){
        axios.get(`/api/getmovie/${this.props.match.params.id}`).then(res=>{
            console.log(res.data[0])
            this.setState({
                movie:res.data[0]
            })
        })
    }

    render(){
        const {title,year,image,details} = this.state.movie
        return(
            <div className='card'>
                <div>
                    <div>
                        <h1>{title}</h1>
                        <h3>{year}</h3>
                        <img src={image} alt="movie" height='200px' width='150px'/>
                    </div>
                    <p>{details}</p>
                </div>
            </div>
        )
    }
}