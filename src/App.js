import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import AuthService from './utils/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './components/Auth/Login';
import Navbar from './components/Main/Navbar';
import Signup from './components/Auth/Signup';
import Homepage from './components/Main/Homepage';
import MoodService from './utils/mapi'
import DailyMood from './components/Main/DailyMood';
import Moodboard from './components/Main/Moodboard';
// import MusicDaily from './components/Suggestions/MusicDaily';
// import YogaVideo from './components/Suggestions/Yoga';
// import MeditationVideo from './components/Suggestions/Meditation';

class App extends React.Component {

  state = {
    loggedInUser: null,
    mood: 'calm',
    spotifyURI: '',
    sentences: '',
    meditationURL: '',
    yogaURL: '',
    coachingURL: '',
    cookingURL:'',
    userId: ''
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
       this.setCurrentUser(response.data);
       localStorage.setItem("loggedInUser", response.data._id)

       //Function to retrieve the mood of the day (the last one from the array)
       const moodService = new MoodService();
       moodService.getTheMoodOfTheDay()
       .then((mood) => {
         
        moodService.getTheMoodAttributes(mood)
         .then((response) => {
           console.log(`RESPONSE`, response.data)
            this.setState ({
                mood: response.data.name,
                spotifyURI: response.data.spotifyURI,
                sentences: response.data.sentences,
                meditationURL: response.data.meditationURL,
                yogaURL: response.data.yogaURL,
                coachingURL: response.data.coachingURL,
                cookingURL:response.data.cookingURL
            })
         })
       })
      
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
            <Route exact path="/" component={Homepage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' render={
              () => {
                return < Login setCurrentUser={this.setCurrentUser}/>
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
                  return <DailyMood loggedInUser={this.state.loggedInUser} />
                } else {
                  return <Redirect to='/login' />
              }
            }
            }/>
            <Route exact path={`/moodboard/${this.state.userId}`} render={
              () => {
                <Moodboard data={this.state} />
              }
            } />

            {/* <Route exact path="/music-daily" component={MusicDaily} />
            <Route exact path="/yoga-video" component={YogaVideo} />
            <Route exact path="/meditation-video" component={MeditationVideo} />  */}
          </Switch>
        </div>
      );
      }
    }

export default App;
