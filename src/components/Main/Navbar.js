import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../../utils/auth';
import {Nav} from 'react-bootstrap';
import './Navbar.css';
import { withRouter} from 'react-router-dom'

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
        if (this.props.location.pathname === '/') {
        if (this.props.loggedInUser) {
            return (
                <div>
                    <Nav className="full-navbar container-fluid" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <div className="container-full-nav">
                            <div className="navbar-items-left">
                        <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}} eventkey="link-1" exact to="/">Home</NavLink>
                        </Nav.Item> 
                        <Nav.Item>
                            <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-2"  to='/daily-mood'> Daily Mood</NavLink>
                        </Nav.Item>   
                            </div>      
                            <div className="navbar-items-right">  
                        <Nav.Item>
                            <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-4"  to={`/moodboard/${this.props.userId}`}> Moodboard</NavLink>
                        </Nav.Item>          
                        <Nav.Item>
                            <NavLink to='/' activeStyle={{color: "#FBDCD7"}} > <button className="auth-button-navbar" onClick={this.logoutUser}> Logout </button></NavLink>
                        </Nav.Item>
                            </div>   
                        </div>
                    </Nav>
                </div>
            )
        } else {
            return (
                <Nav className="full-navbar" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                         <div className="container-full-nav">
                            <div className="navbar-items-left">
                        <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-1" exact to="/">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-2"  to='/daily-mood'> Daily Mood</NavLink>
                        </Nav.Item>
                            </div>
                            <div className="navbar-items-right">         
                        <Nav.Item>
                                <NavLink className="auth-button-navbar" activeStyle={{color: "#FBDCD7"}} exact to="/login">Login</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                                <NavLink className="auth-button-navbar" activeStyle={{color: "#FBDCD7"}}  exact to="/signup">Signup</NavLink>
                        </Nav.Item>
                        </div> 
                        </div> 
                </Nav>
            )
        } } else {
            if (this.props.loggedInUser) {
                return (
                    <div>
                        <Nav className="full-navbar-grey container-fluid" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                            <div className="container-full-nav">
                                <div className="navbar-items-left">
                            <Nav.Item>
                                    <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-1" exact to="/">Home</NavLink>
                            </Nav.Item> 
                            <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-2"  to='/daily-mood'> Daily Mood</NavLink>
                            </Nav.Item>   
                                </div>      
                                <div className="navbar-items-right">  
                            <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-4"  to={`/moodboard/${this.props.userId}`}> Moodboard</NavLink>
                            </Nav.Item>          
                            <Nav.Item>
                                <NavLink to='/' activeStyle={{color: "#FBDCD7"}} > <button className="auth-button-navbar" onClick={this.logoutUser}> Logout </button></NavLink>
                            </Nav.Item>
                                </div>   
                            </div>
                        </Nav>
                    </div>
                )
            } else {
                return (
                    <Nav className="full-navbar-grey container-fluid" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                             <div className="container-full-nav">
                                <div className="navbar-items-left">
                            <Nav.Item>
                                    <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-1" exact to="/">Home</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "#FBDCD7"}}  eventkey="link-2"  to='/daily-mood'> Daily Mood</NavLink>
                            </Nav.Item>
                                </div>
                                <div className="navbar-items-right">         
                            <Nav.Item>
                                    <NavLink className="auth-button-navbar" activeStyle={{color: "#FBDCD7"}} exact to="/login">Login</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                    <NavLink className="auth-button-navbar"  activeStyle={{color: "#FBDCD7"}} exact to="/signup">Signup</NavLink>
                            </Nav.Item>
                            </div> 
                            </div> 
                    </Nav>
                )
            } 
        }
    }
}
export default withRouter(Navbar);