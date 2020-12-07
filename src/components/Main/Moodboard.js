//import MusicDaily from '../Suggestions/MusicDaily';
//import YogaVideo from '../Suggestions/Yoga';
//import MeditationVideo from '../Suggestions/Meditation';
//import Inspiration from '../Suggestions/Inspiration'
import MoodService from '../../utils/mapi'
//import Sentence from '../Suggestions/Sentence';
//import Graph from '../Main/Graph';
//import EvasionRoom from '../Suggestions/EvasionRoom';
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
    }


  
     componentDidMount () {
         //Function to retrieve the mood of the day (the last one from the array)
         const moodService = new MoodService();
         const userId = localStorage.getItem('loggedInUser'); 
         debugger;
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
                  inspirationURL: moodAttributes.cookingURL
              })
           })
         }).catch((err) => console.log("An error occured while trying to retrieve the mood of the day", err))
        } 

    render () {
    return this.state.mood ? (
        <div>
            <h3>Welcome to your Moodboard {/* {this.props.loggedInUser.username} */}</h3>
            <p>Welcome </p>
            <p>{this.state.mood}</p>

            {/* <p>{this.state.moodAttributes.name}</p> 
            
            <div>
              <div> 
              <MusicDaily  moodAttributes={this.state.moodAttributes}/>
                spotifyUri={this.props.data.spotifyURI}
              </div>
              <div>
              <Graph moodAttributes={this.state.moodAttributes}/>
              </div>
              <div> 
              <Sentence />
              </div>
            </div>


            <div>
              <img className='image-hr-transition' src="images/Aloha-orange.png"/>
            </div>

            <div>
              <EvasionRoom  moodAttributes={this.state.moodAttributes} />
            </div>

            <div>
              <img className='image-hr-transition' src="images/Relax-orange.png"/>
            </div>

            <div> 
          <YogaVideo yogaUrl={this.state.moodAttributes.yogaURL[0]}/>
            </div>
            <div> 
          <MeditationVideo meditationUrl={this.state.moodAttributes.meditationURL}/>
            </div>
            <div> 
          <Inspiration inspirationUrl={this.state.moodAttributes.inspirationURL[0]}/>
            </div>
               <div> 
          <Inspiration coachingUrl={this.state.moodAttributes.coachingURL[0]}/>
            </div> */}
        </div>
    ) : null
}
}
export default Moodboard;
