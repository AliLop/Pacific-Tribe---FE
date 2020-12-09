import React from 'react';
import './EvasionRoom.css';
import 'video-react/dist/video-react.css';
// import { Player } from 'video-react';
// ;
import { ControlBar } from 'video-react';
// import { AudioPlayer} from 'react-h5-audio-player';
import { Button } from 'video-react';
import PlayerVideoReact from './VideoPlayer';



class EvasionRoom2 extends React.Component {

   

    render() {

        return(

  
            <div>
             <PlayerVideoReact videoSrc={`https://res.cloudinary.com/dtu8rcnmp/video/upload/v1607446117/project3/Room2_sh8hcr.mp4`} />
            </div> 
            
        )
    }
}

export default EvasionRoom2;

