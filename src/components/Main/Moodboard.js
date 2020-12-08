import MusicDaily from '../Suggestions/MusicDaily';
import YogaVideo from '../Suggestions/Yoga';
import MeditationVideo from '../Suggestions/Meditation';
import Inspiration from '../Suggestions/Inspiration'
import MoodService from '../../utils/mapi'
import Sentence from '../Suggestions/Sentence';
import Coaching from '../Suggestions/Coaching'
import WeeklyChart from './WeeklyChart';
import EvasionRoomEntry from '../Suggestions/EvasionRoomEntry';
import React from 'react';
import { toast, Zoom } from 'react-toastify';
import AudioPlayer from 'react-h5-audio-player';
import './Moodboard.css';

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
        //console.log('Here is the last mood updated by one user:', mood)
        moodService.getTheMoodAttributes(mood.data)
          .then((response) => {
            //console.log(`RESPONSE`, response.data)
            const moodAttributes = response.data[0];
            this.setState ({
              mood: moodAttributes.name,
              //spotifyURI: moodAttributes.spotifyURI,
              sentences: moodAttributes.sentences,
              meditationURL: moodAttributes.meditationURL,
              yogaURL: moodAttributes.yogaURL,
              coachingURL: moodAttributes.coachingURL,
              inspirationURL: moodAttributes.inspirationURL,
              userId: userId
            })
         })
      }).catch((err) => console.log("An error occured while trying to retrieve the mood of the day", err))
    
      // const src='';
      // if(this.state.mood === 'anxious') {
      //   src= 'img-bg1.jpg';
      //  } else if (this.state.mood === 'positive') {
      //   src= 'singup-namaste.png';
      //  } else {
      //    src= 'singup-namaste.png';
      //  }



    const Msg = ({ closeToast }) => (
      <div className="toaster inline"><br/> 
      <div className="toaster-column">
        <h6>It is <small>☕</small> break time!</h6><br/>
        <h6>Drink something and <br/>
        get Pacific <br/>
        <br/>  🤎🧘‍♀️🤎  </h6>
        <br/> 
        </div>
        <div className="toaster-column">
        <img src="/images/homepage-thumb6.jpg" className="portrait" alt='portrait'/>
        </div>
       <AudioPlayer autoPlay className="notification-audio"
                            src='/audio/NotificationAudio.mp3'
                            onPlay={e => console.log("onPlay")}
                            showSkipControls="true"
                        />
      </div>

    )
    setInterval(() => {      
      toast(Msg, { 
          position: "bottom-right", 
          autoClose: 8000, 
          hideProgressBar: true,
          transition: Zoom,
          // not working => limit: 1
      });
    }, 800000);
  } 

  render () {
  return this.state.mood ? (
    <div>
    <div className="div-to-fix-navbar"> </div>
    
    <div>
        <h3>Welcome to your Moodboard</h3>
          <h6>Based on your mood, we thought you might like some Pacific inspiration...</h6>
          {/* <p>{this.state.mood} </p>   */}
      </div>
        <container className="scroll-container">
        <section className="section bg1"> 
          <div> 
            <img className='image-bg1' src={`/images/img-bg1.jpg`} alt="Aloha"/>
          </div>
          <div className="music"> 
            <MusicDaily  mood={this.state.mood} spotifyURI={this.state.spotifyURI} userId={this.state.userId}/> 
          </div>
          <div> 
            <Sentence mood={this.state.mood} sentences={this.state.sentences}/>
          </div>
        </section>
          <div>
            <img className='image-hr-transition' src="/images/Aloha-orange.png" alt="Aloha"/>
          </div>
        <section className="section  bg2 ">
          <div className="evasion-section">
            <EvasionRoomEntry mood={this.state.mood} />
          </div> 
        </section> 
          <div>
            <img className='image-hr-transition' src="/images/Relax-orange.png" alt="Aloha"/>
          </div>
            <section className="section bg3 chart"> 
              <div className="chart-info">
                <br/>
                <h5>A little perspective...</h5>
                <br/>
                <p><small>Because seeing the big picture is important, we we have tailored a visual image 
                for you to  see how you have been feeling lately</small>
                <br/>
                <br/>
                <small><strong>Hoping it will help you <br/>with introspection!</strong></small></p>
              </div>
              <div className="chart">
                <WeeklyChart mood={this.state.mood} />
              </div>
              <div> 
                <img className='chart-pic' src={`/images/chart-pic.jpg`} alt="Aloha"/>
              </div>
            </section>
          <section className="section bg4 videos"> 
            <div> 
              <YogaVideo yogaUrl={this.state.yogaURL}  mood={this.state.mood} />
            </div>
            <div > 
              <MeditationVideo meditationUrl={this.state.meditationURL} mood={this.state.mood} />
            </div>
            </section>
            <section className="section bg4 videos">
            <div > 
              <Inspiration inspirationUrl={this.state.inspirationURL} mood={this.state.mood} />
            </div>
            <div > 
              <Coaching coachingUrl={this.state.coachingURL} mood={this.state.mood} />
            </div>  
          </section>
          </container> 
        
    </div>
  ) : null
}
}
export default Moodboard;
