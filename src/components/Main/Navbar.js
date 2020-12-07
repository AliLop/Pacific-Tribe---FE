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
            localStorage.removeItem("loggedInUser")
            })
    }

    render() {
        if (this.props.loggedInUser) {
            return (
                <div>
                    <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "red"}} eventKey="link-1" exact to="/">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "red"}} eventKey="link-2" exact to="/music-daily">MusicDaily</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "red"}} eventKey="link-3" exact to="/projects">List Projects</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                                <NavLink className="nav-bar-link" activeStyle={{color: "red"}} eventKey="link-4" exact to="/projects/add">Add Project</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-bar-link" to='/'> <button onClick={this.logoutUser}> Logout </button></NavLink>
                        </Nav.Item>
                    
                    </Nav>
                </div>
            )
        } else {
            return (
                <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                    <Nav.Item>
                            <NavLink className="nav-bar-link" activeStyle={{color: "red"}} exact to="/login">Login</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                            <NavLink className="nav-bar-link" activeStyle={{color: "red"}} exact to="/signup">Signup</NavLink>
                    </Nav.Item>
                </Nav>
            )
        }
    }
}
export default Navbar;


