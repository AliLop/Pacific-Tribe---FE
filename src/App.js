import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import AuthService from './utils/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './components/Auth/Login';
import Navbar from './components/Main/Navbar';
import Signup from './components/Auth/Signup';
import Homepage from './components/Main/Homepage';
import DailyMood from './components/Main/DailyMood';
import Moodboard from './components/Main/Moodboard';
import Footer from './components/Main/Footer';
import Video from  './components/Suggestions/Video';
import EvasionRoom1 from './components/Suggestions/EvasionRoom1';
import AboutUs from './components/Main/AboutUs';
import ContactUsForm from './components/Main/ContactUsForm'
import EvasionRoom1 from './components/Suggestions/EvasionRoom1'
import EvasionRoom2 from './components/Suggestions/EvasionRoom2'
import EvasionRoom3 from './components/Suggestions/EvasionRoom3'
import EvasionRoom4 from './components/Suggestions/EvasionRoom4'

class App extends React.Component {
  state = {
    loggedInUser: null,
    userId: '',
    userName: ''
  }
  componentDidMount () {
    if (this.state.loggedInUser === null);
    const authService = new AuthService();
    // checkin if the user session is still active on the server.
   authService.loggedin()
   .then((response) => {
     if (response.data._id) {
       // there's a user session active then set the state
       // with the current user.
       //console.log("this is the value of response data id", response.data._id)
       this.setCurrentUser(response.data);
       localStorage.setItem("loggedInUser", response.data._id);
       localStorage.setItem("loggedInUsername", response.data.username);
     } else {
       localStorage.removeItem('loggedInUser');
       localStorage.removeItem("loggedInUsername");
     }
   })
 }  
  setCurrentUser = (user) => {
    if (user === null) {
    this.setState({
      loggedInUser: null,
      userId: user,
      // userName: user.username
    })
  } else {
    this.setState({
      loggedInUser: user,
      userId: user._id,
      // userName: user.username
    })
  }
  }
  render () {
      return (
        <div className="App">
        <ToastContainer />
        <Navbar loggedInUser={this.state.loggedInUser} setCurrentUser={this.setCurrentUser} userId={this.state.userId}/>
          <Switch>
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/" component={Homepage} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/login' render={
              () => {
                return <Login setCurrentUser={this.setCurrentUser}/>
              }
            } />
            <Route path="/login-google" render={
              () => {
                window.location.href = `${process.env.REACT_APP_PROJECT_API}/api/auth/google`
              }
            } />
            <Route exact path="/daily-mood" render={
              () => {
                if (localStorage.getItem('loggedInUser')) {
                  return <DailyMood loggedInUser={this.state.loggedInUser} userId={this.state.userId} />
                } else {
                  return <Redirect to='/login' />
              }
            }
            }/>
             <Route path={`/moodboard/${this.state.userId}`} render={
              () => {
                if (localStorage.getItem('loggedInUser')) {
                  return <Moodboard {...this.props} userName={this.state.userName}/>
             } else {
                  return <Redirect to='/login' />
              }
            }
            }/>
             
             <Route exact path="/video/:videoId" component={Video} />


            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/contact-us' component={ContactUsForm} />
            
             <Route exact path="/evasion-room/room-pachamama" component={EvasionRoom1} />
             <Route exact path="/evasion-room/room-bohemian" component={EvasionRoom2} />
             <Route exact path="/evasion-room/room-jungle" component={EvasionRoom3} />
             <Route exact path="evasion-room/room-sea" component={EvasionRoom4} />
          </Switch>
          <Footer userId={this.state.userId}/>
        </div>
      );
      }
    }
export default App;