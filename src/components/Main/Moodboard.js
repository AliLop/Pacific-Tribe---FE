import MusicDaily from '../Suggestions/MusicDaily';
import YogaVideo from '../Suggestions/Yoga';
import MeditationVideo from '../Suggestions/Meditation';
import Inspiration from '../Suggestions/Inspiration'

class Moodboard extends React.Component {


import Sentence from './Sentence';
import React from 'react';
class Moodboard extends React.Component {
    render () {
    return (
        <div>
            <h3>Welcome to your Moodboard</h3>
            <div> 
          <Sentence />
            </div>
            <div> 
          <YogaVideo />
            </div>
            <div> 
          <MeditationVideo />
            </div>
            <div> 
          <MusicDaily />
            </div>
            <div> 
          <Inspiration />
            </div>
        </div>
    )
}
}
export default Moodboard;
