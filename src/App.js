import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListProjects from './components/ListProjects'
import AddProject from './components/AddProject';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';
import EditProject from './components/EditProject';
import Signup from './components/Signup';
import React from 'react';
import Login from './components/Login';
import AuthService from './utils/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';


class App extends React.Component {

  state = {
    loggedInUser: null,
    mood: ''
  }

  // This component did mount will allow our user to stay logged in (because on be side they are).
  componentDidMount () {
    if (this.state.loggedInUser === null);
    const authService = new AuthService();
    // checkin if the user session is still active on the server.
   authService.loggedin()
   .then((response) => {
     if (response.data._id) {
       // there's a user session active then set the state
       // with the current user.
       this.setCurrentUser(response.data);
       localStorage.setItem("loggedInUser", response.data._id)
     } else {
       localStorage.removeItem('loggedInUser')
     }
   })
 }  

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user
    })
  }


  render () {
      return (
        <div className="App">
        <ToastContainer />
          <Navbar loggedInUser={this.state.loggedInUser} setCurrentUser={this.setCurrentUser}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={ListProjects}/>
            <Route exact path="/projects/add" render={
              () => {
                if (localStorage.getItem('loggedInUser')) {
                  return <AddProject />
                } else {
                  return <Redirect to='/login' />
              }
            }
            }/>
            <Route exact path="/projects/:id" component={ProjectDetail} />
            <Route exact path="/projects/:id/edit" component={EditProject} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' render={
              () => {
                return < Login setCurrentUser={this.setCurrentUser}/>
              }
            } />
            <Route path="/login-google" render={
              () => {
                window.location.href = `${process.env.REACT_APP_PROJECTS_API}/api/auth/google`
              }
            } />
          </Switch>
        </div>
      );
      }
    }

export default App;
