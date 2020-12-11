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
        <div className="col-6 signup-col">
            <div> <img className="signup-visual" src="images/Signup-namaste.png" alt="signup visual" /></div>
        </div>

        <div class="col-6 signup-col" id="signup-form-container">
            <br/>
                    <h4 className="signup-title">New to Pacific Tribe?</h4>
                    <p>Sign up with your credentials!</p> 
                
                    <form onSubmit={this.handleFormSubmit} className='form-signup'>
                            <input className='input-signup' placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                            <br/>
                            <br/>
                            <input className='input-signup' placeholder="Email"  type='email' name="email" value={this.state.email} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <input className='input-signup'  placeholder="Password" type='password' name="password" value={this.state.password} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <button className="signup-button-official">Signup <i class="fas fa-heart"></i></button>
                    </form>


                    <div className="container-signup-google row container">
                    <div className="col-sm-6">
                    <button className='link-signup link-google'> <Link to="/login-google">Signup with Google</Link></button> 
                    </div>
                    <div className="col-sm-6">
                    <Link className='link-signup' to={"/login"}> Login</Link>
                    </div>
                    </div>
        </div>
    </div>
  
</div>
</div>
        )
      }

}

export default withRouter(Signup);