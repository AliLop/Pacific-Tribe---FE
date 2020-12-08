import React from 'react';
import AuthService from '../../utils/auth';
import { Link, withRouter } from 'react-router-dom';
import './Signup.css';


class Signup extends React.Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const authService = new AuthService();
        authService.signup(this.state.username, this.state.password)
        .then(() => {
            this.props.history.push('/dailymood')
        }) // We could add a catch here.
    }


    render(){
        return(
            <div>

<div className="container image-signup-container">
  <div className="row">
        <div className="col signup-col">
            <div> <img className="signup-visual" src="images/Signup-namaste.png" alt="signup visual" /></div>
        </div>

        <div class="col signup-col" id="signup-form-container">
        <br/>
            <br/>
            <button> <Link to="/login-google">Log in with Google</Link></button>
            <br/>
            <br/>
            <p>Or</p>
                    <p>Sign up with your credentials!</p> 
                
                    <form onSubmit={this.handleFormSubmit}>
                            <label>Username:</label>
                            <br/>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                            <br/>
                            <label>Email:</label>
                            <br/>
                            <input type='email' name="email" value={this.state.email} onChange={this.handleChange} />
                            <br/>
                            <label>Password:</label>
                            <br/>
                            <input type='password' name="password" value={this.state.password} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <button>Signup <i class="fas fa-yin-yang"></i> </button>
                    </form>
                    <br/>
                    <p>Already have account? 
                    <br/>
                            <Link to={"/login"}> Login</Link>
                    </p>
                    <p>Together you will show the World the best version of yourself!</p> 
        </div>
    </div>
  
</div>
</div>
        )
      }

}

export default withRouter(Signup);