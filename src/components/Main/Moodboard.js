import Sentence from './Sentence';
import MusicDaily from './components/Suggestions/MusicDaily';
import YogaVideo from './components/Suggestions/Yoga';
import MeditationVideo from './components/Suggestions/Meditation';
import React from 'react';

class Moodboard extends React.Component {



    render () {
    return (
        <div>
            <h3>Welcome to your Moodboard</h3>
            <div> 
          <Sentence />
          <MusicDaily />
          <YogaVideo />
          <MeditationVideo />
            </div>
        </div>
    )
}
}

export default Moodboard; 