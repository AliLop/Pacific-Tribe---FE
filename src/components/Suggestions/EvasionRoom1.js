import React from 'react';
import './EvasionRoom.css';
//import Room1  from '/videos/Room1.mp4';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import { BigPlayButton } from 'video-react';
import AudioPlayer from 'react-h5-audio-player';
//import {audio1} from '/audio/Room1.mp3';


class EvasionRoom1 extends React.Component {

    
    state = {
        
    }

    componentDidMount() {
       
                this.setState({
                  
                })
            
    }


    render() {

        return(
            <div>
            
        <section className="row wrap evasion-room-content">
           <div className="video-evasion-room-container">
        
            <Player>
             <source loop muted fluid className="evasion-video" src='videos/Room1.mp4' type="video/mp4" alt="Evasion-room-jungle"/>
             <BigPlayButton position="center" />
            </Player>

            <AudioPlayer className="audio-compo"
                            src='...' 
                            onPlay={e => console.log("onPlay")}
                            loop="true"
                            showSkipControls="true"
                            customAdditionalControls={[]}
                            // other props here
                        />


    
           </div>
           
        </section>
            </div> 
        )
    }
}

export default EvasionRoom1;

