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
        <h6 className="toaster-title">It is <small>☕</small> break time!</h6><br/>
        <h6 className="toaster-title">Drink something and <br/>
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
      </div>

        )
      let nudgeInterval = setInterval(() => {      
          toast(Msg, { 
              position: "bottom-right", 
              autoClose: 8000,
              hideProgressBar: true,
              transition: Zoom,
          });
        }, 250000);
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
          
          <p> </p>
      </div>
        <container className="scroll-container">
            <section className="section-scroll row bg1" style={{ backgroundImage: "url('/images/Bar-top-moodboard.png')"}}> 
                <div className="music-daily-div container-fluid"> 
                  <MusicDaily  mood={this.state.mood} spotifyURI={this.state.spotifyURI} userId={this.state.userId}/> 
                </div>
                <div> 
                
                  <img className='image-bg1' src={'/images/Welcome.png'} alt="woman"/>
                  <h6 className="moodboard-subtitle">Based on your mood, <br/> we thought you might like <br/> some Pacific inspiration...</h6>
                </div>
                <div> 
                  <Sentence  mood={this.state.mood} sentences={this.state.sentences}/>
                </div>
  
            </section>

              <div>
                <img className='image-hr-transition aloha-transition' src="/images/Aloha-camel-small.png" alt="Aloha"/>
              </div>

            <section className="section-scroll  bg2">
            <div>
              <div className="row title-evasion-bloc">
                  <div className="empty-div-evasion-room"></div>
                    <div> 
                      <div className="evasion-room container">
                      <h4 className="evasion-room-title" > Time for Evasion... </h4> 
                      </div> 
                    </div> 
                  <div className="empty-div-background2"></div>
              </div>
              <div className="evasion-section">
                <EvasionRoomEntry mood={this.state.mood} />
              </div> 
              </div>
            </section> 


              <div>
                <img className='image-hr-transition' src="/images/Relax-camel-small.png" alt="Aloha"/>
              </div>

              
                <section className="section-scroll bg3 chart container"> 
                  <div className="chart-info row">
                      <div className="perspective-brief col-sm-2">
                          <div> <h4 className="perspective-title">A little <br/> perspective...</h4> </div>
                          <div className="perspective-text"> <p>Because seeing the big picture is important, we we have tailored a visual image 
                          for you to  see how you have been feeling lately. Hoping it will help you with introspection!</p>
                          <Link className="button-update-daily"  eventkey="link-2"  to='/daily-mood'> Update your Daily Mood</Link>
                          </div>
                      </div>
                     
                    <div className="perspective-picture col-sm-4"> 
                    <img className='chart-pic' src={`/images/chart-pic.png`} alt="chart"/>
                    </div>
      
                    <div className="chart-final-graph col-sm-6">
                    <WeeklyChart mood={this.state.mood} />
                    </div>
                </div>
                
                  
            </section>

          <div className="row title-suggestion-bloc">
          <div className="empty-div-background"></div>
            <div> 
              <br/>
              <div className="tailored-recipe container">
              <h4 className="tailored-title" > The tailored recipe... </h4> 
              </div> 
            </div> 
            <div className="empty-div-background2"></div>
          </div>


          <section className="section-suggestions bg4 videos"  style={{ backgroundImage: "url('/images/background-suggestion.png')" }}> 
      <div className="suggestions container">
      <div className="row yoga-meditation">
            <div className="col-md-4 yoga-div">  
                <Link to={`/video/${this.state.yogaURL}`}>
                  <img className='yoga-pic' src={`/images/Yoga.png`} alt="Aloha"/>
                </Link>
            </div>
            <div class="col-md-4 background-suggestions suggestions-text-bloc">
              <div>
                  <h5  className="suggestion-baseline"> Conquer inner peace </h5>
                  <p>Believe in the power of regularly practising <br/>
                  yoga and meditation to calm your thoughts,<br/>
                  find focus and improve your overall <br/>
                wellbeing and health on your daily life.</p>
              </div>
            </div>
            <div className="col-md-4 meditation-div"> 
             <Link to={`/video/${this.state.meditationURL}`}>
                <img className='meditation-pic' src={`/images/Meditation.png`} alt="Aloha"/>
             </Link>
            </div>
        </div> 

        <div className='circle-middle'></div>

        <div className="row inspiration-coaching">
            <div className="col-md-4 inspiration-div"> 
                  <Link to={`/video/${this.state.inspirationURL}`}>
                    <img className='inspiration-pic' src={`/images/Inspiration.png`} alt="Aloha"/>
                </Link>
              </div>
              <div class="col-md-4 background-suggestions suggestions-text-bloc">
                <div>
                    <h5 className="suggestion-baseline"> Nourish your mind </h5>
                    <p>Discover real and recognised <br/>
                    life coaches and inspirational humans <br/>
                    to empower your Self-consciousness<br/>
                    and help you persue your dreams.</p>               
                </div>
              </div>
              <div className="col-md-4 coaching-div"> 
                  <Link to={`/video/${this.state.coachingURL}`}>
                      <img className='coaching-pic' src={`/images/Coaching.png`} alt="Aloha"/>
                  </Link>
              </div>  
        </div>
      </div>
          </section>
    
        <section> 

          <div className="row title-chaman-bloc">
            <div className="empty-div-last-segment"></div>
              <div> 
                <div className="digital-chaman container">
                <h4 className="tell-wind" > Tell it to the wind... </h4> 
                </div> 
              </div> 
              <div className="empty-div-last-segment2"></div>
          </div>

              
          <div>
          <Chaman />
          </div>
   
            </section>
      </container> 
        <br/>
    </div>
  ) : null
}
}
export default withRouter(Moodboard);
