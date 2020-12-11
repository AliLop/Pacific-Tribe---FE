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

    componentDidMount() {
        window.scrollTo(0, 0);
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

        <div className="col signup-col" id="signup-form-container">
            <br/>
                    <p>New to Pacific Tribe?</p>
                    <p>Sign up with your credentials!</p> 
                
                    <form onSubmit={this.handleFormSubmit}>
                            <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                            <br/>
                            <br/>
                            <input placeholder="Email"  type='email' name="email" value={this.state.email} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <input placeholder="Password" type='password' name="password" value={this.state.password} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <button>Signup </button>
                    </form>

                    <br/>
                    <br/>
                    <button> <Link to="/login-google">Log in with Google</Link></button>
                    <br/>
                    <br/>
                    <p>Together you will show the World your best version!</p> 
                    
                    <p>Already have account? 
                    <br/>
                            <Link to={"/login"}> Login</Link>
                    </p>
        </div>
    </div>
  
</div>
</div>
        )
      }

}

export default withRouter(Signup);