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
import Footer from './components/Main/Footer';
import MusicDaily from './components/Suggestions/MusicDaily';
// import YogaVideo from './components/Suggestions/Yoga';
// import MeditationVideo from './components/Suggestions/Meditation';

class App extends React.Component {

  state = {
    loggedInUser: null,
    mood: '',
    spotifyURI: '',
    sentences: '',
    meditationURL: '',
    yogaURL: '',
    coachingURL: '',
    inspirationURL:'',
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
       console.log("this is the value of response data id", response.data._id)
       this.setCurrentUser(response.data);
       localStorage.setItem("loggedInUser", response.data._id)

       //Function to retrieve the mood of the day (the last one from the array)
       
       const moodService = new MoodService();
       const userId = response.data._id  
       moodService.getTheMoodOfTheDay(userId)
       .then((mood) => {
         console.log('Here is the last mood updated by one user:', mood)
        /* return moodService.getTheMoodAttributes(mood)
         .then((response) => {
           console.log(`RESPONSE`, response.data)
            this.setState ({
                mood: response.data.name,
                spotifyURI: response.data.spotifyURI,
                sentences: response.data.sentences,
                meditationURL: response.data.meditationURL,
                yogaURL: response.data.yogaURL,
                coachingURL: response.data.coachingURL,
                inspirationURL:response.data.cookingURL
            })
         })*/
       }).catch((err) => console.log("An error occured while trying to retrieve the mood of the day", err))
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
            <Route  path={`/moodboard/${this.state.userId}`} component={Moodboard} />
            {/* <Route path={`/moodboard/${this.state.userId}`} render={
              () => {
                <Moodboard data={this.state}/>
              }
            } /> */}

            <Route exact path="/music-daily" component={MusicDaily} />
           {/* <Route exact path="/yoga-video" component={YogaVideo} />
            <Route exact path="/meditation-video" component={MeditationVideo} />  */}
          </Switch>
          <Footer />
        </div>
      );
      }
    }

export default App;
