import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick() {
        const { username, password } = this.state
        axios.post('/api/login', { username, password }).then(res => {
            this.props.history.push('/movies')
        }).catch(err => {
            alert('Invalid Username or Password')
        })
    }

    render() {
        return (
            <div className='login-body'>
                <div className='login-box'>
                    <h1 className='login-text'>Check-In</h1>
                    <input
                        type="text"
                        placeholder='Username'
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })} />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        placeholder='Password'
                    />
                    <div>
                        <button>Register</button>
                        <button onClick={() => this.handleClick()}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}