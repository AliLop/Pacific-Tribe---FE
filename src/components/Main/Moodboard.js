import MusicDaily from '../Suggestions/MusicDaily';
import YogaVideo from '../Suggestions/Yoga';
import MeditationVideo from '../Suggestions/Meditation';
import Inspiration from '../Suggestions/Inspiration'

import Sentence from '../Suggestions/Sentence';
import React from 'react';
class Moodboard extends React.Component {

    state = {
        moodAttributes: this.props.data,
        name: this.props.data.mood
    }
    render () {
    return (
        <div>
            <h3>Welcome to your Moodboard</h3>
            <p>{this.state.moodAttributes.name}</p>
            <div> 
            Here goes the sentence component.
          <Sentence />
            </div>
            <div> 
          <YogaVideo yogaUrl={this.state.moodAttributes.yogaURL[0]}/>
            </div>
            <div> 
          <MeditationVideo meditationUrl={this.state.moodAttributes.meditationURL}/>
            </div>
            <div> 
          <MusicDaily spotifyUri={this.props.data.spotifyURI}/>
            </div>
            <div> 
          <Inspiration inspirationUrl={this.state.moodAttributes.inspirationURL[0]}/>
            </div>
               <div> 
          <Inspiration coachingUrl={this.state.moodAttributes.coachingURL[0]}/>
            </div>
        </div>
    )
}
}
export default Moodboard;
