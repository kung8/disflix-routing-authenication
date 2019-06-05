import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Header.css' 

function Header (props){
    console.log(props)
    return(
        props.history.location.pathname !== '/' ?
        <header>
            <h1 className='logo'>Disflix</h1>
            <div className="nav">
                <Link to='/movies'><i className="fas fa-home"/></Link>
                <Link to='/'><i className="fas fa-sign-out-alt"/></Link>
            </div>
        </header>
        :
        <header>
            <h1 className='logo'>Disflix</h1>
        </header>
    )
}

export default withRouter(Header)