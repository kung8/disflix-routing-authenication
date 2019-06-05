import React from 'react'
import {Link, withRouter} from 'react-router-dom'
 
function Header (props){
    console.log(props)
    return(
        props.history.location.pathname !== '/' ?
        <div>
            <h1>Disflix</h1>
            <div>
                <Link to='/movies'><h1>Home</h1></Link>
                <Link to='/'><h1>Logout</h1></Link>
            </div>
        </div>:<div>
        <h1>Disflix</h1>
        </div>
    )
}

export default withRouter(Header)