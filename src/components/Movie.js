import React, {Component} from 'react'
import axios from 'axios'

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
            <div>
                <h1>{title}</h1>
                <h3>{year}</h3>
                <img src={image} alt="movie"/>
                <p>{details}</p>
            </div>
        )
    }
}