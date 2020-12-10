import React from 'react';
import './EvasionRoom.css';
import 'video-react/dist/video-react.css';
import AudioPlayer from 'react-h5-audio-player';
import PlayerVideoReact from './VideoPlayer';

class EvasionRoom4 extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = { 
            loop: true,
            showCircle: false
        }
    }

    triggerCircle() {
        this.setState({
            showCircle: true
          });
    }

    render () {
        return(
            <div>
                { this.state.showCircle && <div class="breathing-circle"></div> }
                
                <div className="audio-player-evasion">
                <AudioPlayer className="audio-compo"
                    src={"https://res.cloudinary.com/dtu8rcnmp/video/upload/v1607453507/project3/Room4_zawfji.mp3"} 
                    onPlay={e => console.log("onPlay")}
                    showSkipControls={"false"}
                    // customAdditionalControls={[]}
                    // loop={"true"}
                    showJumpControls={"false"}
                    showDownloadProgress={"false"}
                    // showFilledProgress={"false"}
                    showFilledVolume={"true"}
                     />
                </div>

               <div>
                
                </div>

                <div>
                <PlayerVideoReact trigger={this.triggerCircle.bind(this)}  aspectRatio={"16:9"} videoSrc={`https://res.cloudinary.com/dtu8rcnmp/video/upload/v1607450840/project3/Room4_1_cdzokr.mp4`} loop={"true"} />
                </div>
 
                

            </div>
            
        )
}
}


export default EvasionRoom4;


