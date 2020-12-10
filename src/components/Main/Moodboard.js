import MusicDaily from '../Suggestions/MusicDaily';
import MoodService from '../../utils/mapi'
import Sentence from '../Suggestions/Sentence';
import WeeklyChart from './WeeklyChart';
import EvasionRoomEntry from '../Suggestions/EvasionRoomEntry';
import React from 'react';
import { toast, Zoom } from 'react-toastify';
//import AudioPlayer from 'react-h5-audio-player';
import './Moodboard.css';
import { Link } from 'react-router-dom';
import Chaman from '../Suggestions/Chaman';
import { withRouter} from 'react-router-dom'

class Moodboard extends React.Component {

  state = {
        mood: '',
        spotifyURI: '',
        sentences: [],
        meditationURL: [],
        yogaURL:[],
        coachingURL: [],
        inspirationURL: [],
        nudgeInterval: ''
        //userName: this.props.userName
  }

    componentWillUnmount() {
      debugger;
      clearInterval(this.state.nudgeInterval);
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

          <br/>
            <h6>It is <small>☕</small> break time!</h6><br/>
            <h6>Drink something and <br/>
            get Pacific <br/>
            <br/>  🤎🧘‍♀️🤎  </h6>
            <br/> 
            </div>
            <div className="toaster-column">
            <img src="/images/homepage-thumb6.jpg" className="portrait" alt='portrait'/>
            </div>
            <br/>
            Hide
            <br/>
          {/* <AudioPlayer autoPlay className="notification-audio"
                                src='/audio/NotificationAudio.mp3'
                                onPlay={e => console.log("onPlay")}
                                showSkipControls="true"
                                
                            /> */}
          </div>

        )
      let nudgeInterval = setInterval(() => {      
          toast(Msg, { 
              position: "bottom-right", 
              autoClose: 8000,
              hideProgressBar: true,
              transition: Zoom,
          });
        }, 200000);
        this.setState({
          nudgeInterval: nudgeInterval
        })
    }

  render () {
  return this.state.mood ? (
    <div>
    <div className="logo-moodboard"> <img className="logo-moodboard" src="/images/LogoV11.png" alt="moodboard-logo-visual" /></div>

      <div className="moodboard-wrapper">
        <h3 className="moodboard-title">Welcome to your Moodboard</h3>
          <h6 className="moodboard-subtitle">Based on your mood, we thought you might like some Pacific inspiration...</h6>
          <p> </p>
      </div>
        <div className="scroll-container">
            <section className="section-scroll row bg1"> 
 
                <div className="music-daily-div container-fluid"> 
                  <MusicDaily  mood={this.state.mood} spotifyURI={this.state.spotifyURI} userId={this.state.userId}/> 
                </div>
                <div> 
                  <img className='image-bg1' src={'/images/Welcome.png'} alt="woman"/>
                </div>
                <div> 
                  <Sentence mood={this.state.mood} sentences={this.state.sentences}/>
                </div>
  
            </section>

              <div>
                <img className='image-hr-transition' src="/images/Aloha-camel-small.png" alt="Aloha"/>
              </div>

            <section className="section-scroll  bg2">
              <div className="evasion-section">
                <EvasionRoomEntry mood={this.state.mood} />
              </div> 
            </section> 


              <div>
                <img className='image-hr-transition' src="/images/Relax-camel-small.png" alt="Aloha"/>
              </div>
                <section className="section-scroll bg3 chart"> 
                  <div className="chart-info">
                    <br/>
                    <h4>A little perspective...</h4>
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


            <div> 
              <br/> 
              <h4> The tailored recipe... </h4> 
            </div> 


          <section className="section-scroll bg4 videos"> 
            <div>  
              <Link to={`/video/${this.state.yogaURL}`}>
                <img className='yoga-pic' src={`/images/Yoga.png`} alt="Aloha"/>
              </Link>
            </div>
            <div>
              <h5> Conquer inner peace </h5>
            <p>Believe in the power of regularly practising <br/>
              yoga and meditation to calm your thoughts,<br/>
              find focus and improve your overall <br/>
             wellbeing and health on your daily life.</p>
             <br/>
             <h6>Breathe in, strecht your body, widen your mind.</h6>
            </div>
            <div > 
             <Link to={`/video/${this.state.meditationURL}`}>
                <img className='meditation-pic' src={`/images/Meditation.png`} alt="Aloha"/>
             </Link>
            </div>
            </section>


            <section className="section-scroll bg4 videos">
           <div> 
              <Link to={`/video/${this.state.inspirationURL}`}>
                <img className='inspiration-pic' src={`/images/Inspiration.png`} alt="Aloha"/>
             </Link>
            </div> 
           <br/> 
            <div>
            <h5> Nourish your mind </h5>
            <p>Discover real and recognised <br/>
             life coaches and inspirational humans <br/>
             to empower your Self-consciousness<br/>
             and help you persue your dreams.</p>
             <br/>
             <h6>Elevate the soul and achieve your better self.</h6>
            </div>
            <div > 
             <Link to={`/video/${this.state.coachingURL}`}>
                <img className='coaching-pic' src={`/images/Coaching.png`} alt="Aloha"/>
             </Link>
            </div>  

          </section>
          <br/> 
             <div> 
            <h4> Your confidant </h4>
            </div> 
             <section> 
              
                <div>
                <Chaman />
                </div>
   
            </section>
            <br/>
            <div> 
            <h4> ...for holistic wellbeing </h4> 
            </div> 
          </div> 
        <br/>
    </div>
  ) : null
}
}
export default withRouter(Moodboard);
