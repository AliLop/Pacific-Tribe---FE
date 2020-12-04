import MusicDaily from '../Suggestions/MusicDaily';
import YogaVideo from '../Suggestions/Yoga';
import MeditationVideo from '../Suggestions/Meditation';
import Inspiration from '../Suggestions/Inspiration'
import Sentence from '../Suggestions/Sentence';


import React from 'react';
class Moodboard extends React.Component {
    render () {
    return (
        <div>
            <h3>Welcome to your Moodboard</h3>
            <div> 
            Here goes the sentence component.
          <Sentence />
            </div>
            <div> 
            Here goes the yoga component.
          <YogaVideo />
            </div>
            <div> 
            Here goes the meditation component.
          <MeditationVideo />
            </div>
            <div> 
            Here goes the music component.
          <MusicDaily />
            </div>
            <div> 
            Here goes the inspiration component.
          <Inspiration />
            </div>
        </div>
    )
}
}
export default Moodboard;
