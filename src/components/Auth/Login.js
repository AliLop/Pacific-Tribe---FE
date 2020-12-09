import React from 'react';
import AuthService from '../../utils/auth';
import { Link, withRouter} from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import './Login.css';
class Login extends React.Component {
    state = {
        username: '',
        password: ''
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
                        
        }).catch(() => {
            toast.warn('invalid Login', { 
                transition: Zoom,
                autoClose: 3500, 
                hideProgressBar: true
            });
        }
        )
    }
    render() {
        return(
            <div>
            <div className="container image-signup-container">
            <div className="row">
                <div className="col signup-col">
                    <div> <img className="login-visual" src="images/Signup-v3.png" alt="signup visual" /></div>
                </div>
                <div class="col signup-col" id="signup-form-container">
                <br/>
                <button> <Link to="/login-google">Log in with Google</Link></button>
                <br/>
                <br/>
                <p>Log in with your credentials</p> 
                <br/>
            <form onSubmit={this.handleFormSubmit}>
                <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                <br/>
                <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <br/>
                <br/>
                <button>Login</button>
            </form>
            <br/>
                    <p>Together you will show the World your best version!</p> 
            <p>Don't have account? 
            <br/> 
                <Link to={"/signup"}> Signup</Link>
            </p>
        </div>   
       </div>
      </div> 
     </div>  
        )
    }
}

export default withRouter(Login);