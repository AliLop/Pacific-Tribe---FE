import MusicDaily from '../Suggestions/MusicDaily';
import YogaVideo from '../Suggestions/Yoga';
import MeditationVideo from '../Suggestions/Meditation';
import Inspiration from '../Suggestions/Inspiration'
import MoodService from '../../utils/mapi'
import Sentence from '../Suggestions/Sentence';
import Coaching from '../Suggestions/Coaching'
import WeeklyChart from './WeeklyChart';
import EvasionRoom from '../Suggestions/EvasionRoom';
import React from 'react';
import { toast, Zoom } from 'react-toastify';
//import AudioPlayer from 'react-h5-audio-player';
import './Moodboard.css';
//import NotificationAudio from './waves.mp3';

class Moodboard extends React.Component {

  state = {
        mood: '',
        spotifyURI: '',
        sentences: [],
        meditationURL: [],
        yogaURL:[],
        coachingURL: [],
        inspirationURL: []
        //userName: this.props.userName
  }

  componentDidMount () {
    //Function to retrieve the mood of the day (the last one from the array)
    const moodService = new MoodService();
    const userId = localStorage.getItem('loggedInUser'); 
    moodService.getTheMoodOfTheDay(userId)
      .then((mood) => {
        console.log('Here is the last mood updated by one user:', mood)
        moodService.getTheMoodAttributes(mood.data)
          .then((response) => {
            console.log(`RESPONSE`, response.data)
            const moodAttributes = response.data[0];
            this.setState ({
              mood: moodAttributes.name,
              spotifyURI: moodAttributes.spotifyURI,
              sentences: moodAttributes.sentences,
              meditationURL: moodAttributes.meditationURL,
              yogaURL: moodAttributes.yogaURL,
              coachingURL: moodAttributes.coachingURL,
              inspirationURL: moodAttributes.inspirationURL,
              userId: userId
            })
         })
      }).catch((err) => console.log("An error occured while trying to retrieve the mood of the day", err))
    

    const Msg = ({ closeToast }) => (
      <div className="toaster inline"><br/> 
      <div className="toaster-column">
        <h6>It is <small>☕</small> break time!</h6><br/>
        <h6>Drink something and <br/>
        get Pacific <br/>
        <br/>   🤎🧘‍♀️🤎  </h6>
       {/* <audio autoPlay type="music" src={NotificationAudio}></audio>  */}
        <br/> 
        </div>
        <div className="toaster-column">
        <img src="images/homepage-thumb6.jpg" className="portrait" alt='portrait'/>
        </div>
      </div>

    )
    setTimeout(() => {
      // let notificationAudio = new Audio('C:/users/alici/desktop/labs/Moduel3-FINAL-PROJECT-FE/public/audio/waves.mp3');
      //   notificationAudio.autoplay();
       
      toast(Msg, { 
          position: "bottom-right", 
          autoClose: 8000, 
          hideProgressBar: true,
          transition: Zoom
      });
    }, 4500);
  } 

  render () {
  return this.state.mood ? (
    <div>
       <h3>Welcome to your {this.state.mood} Moodboard </h3>

        <h6>Based on your mood, we thought you might like some...</h6>
        
        <div> 
          <MusicDaily  mood={this.state.mood} spotifyURI={this.state.spotifyURI} userId={this.state.userId}/> 
        </div>
        <div>
          <WeeklyChart mood={this.state.mood} />
        </div>
        <div> 
          <Sentence mood={this.state.mood} sentences={this.state.sentences}/>
        </div>
  
        <div>
          <img className='image-hr-transition' src="images/Aloha-orange.png" alt="Aloha"/>
        </div>

        <div>
        <EvasionRoom mood={this.state.mood} />
        </div> 
 
    <br />
    <div>
      <div>
        <img className='image-hr-transition' src="images/Relax-orange.png" alt="Aloha"/>
      </div>

      <div> 
        <YogaVideo yogaUrl={this.state.yogaURL}  mood={this.state.mood} />
      </div>
      <div> 
        <MeditationVideo meditationUrl={this.state.meditationURL} mood={this.state.mood} />
      </div>
      <div> 
        <Inspiration inspirationUrl={this.state.inspirationURL} mood={this.state.mood} />
      </div>
      <div> 
        <Coaching coachingUrl={this.state.coachingURL} mood={this.state.mood} />
      </div>  
      </div>  
    </div>
  ) : null
}
}
export default Moodboard;
