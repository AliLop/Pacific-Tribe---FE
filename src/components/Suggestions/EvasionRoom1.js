import React from 'react';
import './EvasionRoom.css';
import 'video-react/dist/video-react.css';
// import { Player } from 'video-react';
// ;
import { ControlBar } from 'video-react';
// import { AudioPlayer} from 'react-h5-audio-player';
import { Button } from 'video-react';
import PlayerVideoReact from './VideoPlayer';



class EvasionRoom1 extends React.Component {

   

    render() {

        return(

           
            <div>
             <PlayerVideoReact videoSrc={`https://res.cloudinary.com/dtu8rcnmp/video/upload/v1607446126/project3/Room1_xdpwwh.mp4`} />
            </div> 
            
        )
    }
}

export default EvasionRoom1;

