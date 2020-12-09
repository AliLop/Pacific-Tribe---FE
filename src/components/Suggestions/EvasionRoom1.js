import React from 'react';
import './EvasionRoom.css';
import 'video-react/dist/video-react.css';
// import { AudioPlayer} from 'react-h5-audio-player';
import PlayerVideoReact from './VideoPlayer';
// import Progress from 'react-circle-progress-bar'


class EvasionRoom1 extends React.Component {

   

    render() {

        return(
            <div>
              
 

            <div>
             <PlayerVideoReact videoSrc={`https://res.cloudinary.com/dtu8rcnmp/video/upload/v1607446126/project3/Room1_xdpwwh.mp4`} />
            </div> 



            </div>
            
        )
    }
}

export default EvasionRoom1;

