import React from 'react';
import AuthService from '../../utils/auth';
import { Link, withRouter} from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';

//import Popup from '../Main/PopUp';
class Login extends React.Component {
    state = {
        username: '',
        password: ''
                       // showPopup: false
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        const authService = new AuthService();
        authService.login(username, password)
        .then((response) => {
            // lifting up the state up to app.js
            // setCurrentUser comes as a prop from app.js.
            // The response data is what comes from axios.
            this.props.setCurrentUser(response.data)
            // save user id browser to local storage.
            localStorage.setItem('loggedInUser', response.data._id)
            this.props.history.push('/daily-mood');
            // this.togglePopup.bind(this)
            //             this.togglePopup()
                        
        }).catch(() => {
            toast.warn('invalid Login', { 
                transition: Zoom,
                autoClose: 3500, 
                hideProgressBar: true
            });
        }
        )

        // this.togglePopup = () => {
        //                     this.setState({
        //                     showPopup: !this.state.showPopup
        //                     });
        //                 }
    }
    render() {
        return(
            <div>
                <button> <Link to="/login-google">Log in with Google</Link></button>
                <p>Log in with your credentials</p> 
            <form onSubmit={this.handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <label>Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button>Login</button>
            </form>
            <p>Don't have account? 
                <Link to={"/signup"}> Signup</Link>
            </p>

            {/* {this.state.showPopup ? 
                <Popup
                    text='Close Me'
                    closePopup={this.togglePopup.bind(this)}
                />
                : null
                } */}


        </div>   
        )
    }
}

export default withRouter(Login);