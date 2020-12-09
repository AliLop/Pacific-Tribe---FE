import React from 'react';
import { toast, Zoom } from 'react-toastify';
import './Login.css';
class Contact extends React.Component {
   state = {
        description: "",

    }
    handleChange = (event) => {
        let { name, value } = event.target;

         this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
      event.preventDefault();
      toast("Forget about it now...Feeling ligther already?", { 
        position: "bottom-left", 
        autoClose: 3000, 
        hideProgressBar: true,
        transition: Zoom,
    })
    this.setState({
        description: ""
    })
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
              
            </p>
        </div>   
       </div>
      </div> 
     </div>  
        )
    }
}

export default Contact;