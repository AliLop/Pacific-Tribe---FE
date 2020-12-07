import MusicDaily from '../Suggestions/MusicDaily';
import YogaVideo from '../Suggestions/Yoga';
import MeditationVideo from '../Suggestions/Meditation';
import Inspiration from '../Suggestions/Inspiration'
import MoodService from '../../utils/mapi'
import Sentence from '../Suggestions/Sentence';
import Graph from '../Main/Graph';
import EvasionRoom from '../Suggestions/EvasionRoom';
import React from 'react';
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
        } 

    render () {
    return this.state.mood ? (
        <div>
            <h3>Welcome to your Moodboard </h3>
            <p>{this.state.mood}</p>
            
             <div>
              <div> 
              <p> MUSIC </p>
              {/* <MusicDaily  mood={this.state.mood} spotifyUri={this.state.spotifyURI} userId={this.state.userId}/> */}
              </div>
              <div>
              {/* <Graph userId={this.state.userId}/> */}
              </div>
              <div> 
              <Sentence mood={this.state.mood} spotifyUri={this.state.sentences[0]}/>
              </div>
            </div> 

             <div>
              <img className='image-hr-transition' src="images/Aloha-orange.png" alt="Aloha"/>
            </div>

            {/* <div>
              <EvasionRoom mood={this.state.mood} />
            </div> */}

            <div>
              <img className='image-hr-transition' src="images/Relax-orange.png" alt="Aloha"/>
            </div>

            {/* <div> 
          <YogaVideo yogaUrl={this.state.yogaURL}  mood={this.state.mood} />
            </div>
            <div> 
          <MeditationVideo meditationUrl={this.state.meditationURL} mood={this.state.mood} />
            </div>
            <div> 
          <Inspiration inspirationUrl={this.state.inspirationURL} mood={this.state.mood} />
            </div>
               <div> 
          <Inspiration coachingUrl={this.state.coachingURL} mood={this.state.mood} />
            </div>  */}
        </div>
    ) : null
}
}
export default Moodboard;
