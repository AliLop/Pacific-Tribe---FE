import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../../utils/auth';
import {Nav} from 'react-bootstrap';
import './Navbar.css';

class Navbar extends React.Component {

    logoutUser = () => {
        const authService = new AuthService();
        authService.logout()
            .then(() => {
            this.props.setCurrentUser(null);
            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("loggedInUsername");
            })
    }

    render() {
    
        if (this.props.loggedInUser) {
            return (
                <Navbar bg="transparent" className="navbar">
                    <div className="nav-container container">
                        <div className='left-items-navbar'>
                            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                            <NavLink className="nav-bar-link" activeStyle={{fontWeight: 600}} eventkey="link-1" exact to="/">Home</NavLink>
                            <NavLink className="nav-bar-link" activeStyle={{fontWeight: 600}} eventkey="link-4"  to='/moodboard'> Moodboard</NavLink>
                            </Nav>
                        </div>
                         <div className='right-items-navbar'>
                            <NavLink className="nav-bar-link"  activeStyle={{fontWeight: 600}} eventkey="link-2"  to='/daily-mood'> Daily Mood</NavLink>
                            <NavLink className="auth-button" to='/'> <button onClick={this.logoutUser}> Logout </button></NavLink>
                        </div>
                   
                    </div>
                </Navbar>
            )
        } else {
            return (     
                <Navbar bg="transparent" className="navbar"> 
                <div className="nav-container container">
                    <div className='left-items-navbar'>
                        <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <NavLink className="nav-bar-link" activeStyle={{fontWeight: 600}} eventkey="link-1" exact to="/">Home</NavLink>
                        </Nav>
                    </div>  
                    <div className='right-items-navbar'>  
                        <NavLink className="auth-button" exact to="/login">Login</NavLink>
                        <NavLink className="auth-button" exact to="/signup">Signup</NavLink>
                    </div>  
                </div>
                </Navbar> 
            )
        } 
     
    }
}

export default Navbar;



