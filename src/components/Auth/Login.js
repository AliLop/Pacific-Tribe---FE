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

    componentDidMount() {
        window.scrollTo(0, 0);
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
                    <div> <img className="login-visual" src="images/HomepageVisual3.png" alt="signup-visual2" /></div>
                </div>
        
                <div className="col signup-col" id="signup-form-container">
                <div className="div-login-align">
                    <h4 className='title-login-daily'>Log in with your credentials</h4>
                    <form onSubmit={this.handleFormSubmit} className="form-login-container">
                        <input className="input-login" placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/> <br/>
                        <input className="input-login" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />  <br/>
                        <button className='login-button-official'>Login <i className="fas fa-heart"></i></button>
                    </form>
                </div>

                <div className="row other-buttons">
                <div className="col-sm-6">
                    <p className="login-mention"> Log in with Google </p>
                    <button  className="link-login"><Link to={"/login-google"} className="link-effect"> Google Login </Link> </button>
                </div>
                <div className="col-sm-6">
                    <p className="login-mention">Don't have account? </p>
                    <Link to={"/signup"} className="link-login link-effect"> Signup</Link>
                </div>
                </div>
        </div>   
       </div>
      </div> 
     </div>  
        )
    }
}

export default withRouter(Login);