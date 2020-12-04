import React from 'react';
import YoutubeService from '../utils/yapi';
//import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Sentence from './Sentence'

class ListProjects extends React.Component {
    state = {
        meditation: '',
        yoga: ''
        //cooking: '',
        // opts: {
        //       height: '390',
        //       width: '640',
        //       playerVars: {
        //         autoplay: 1,
        //          color: "blue"
        //       }
        //     }
    }

    componentDidMount() {
        const youtubeService = new YoutubeService();
        youtubeService.getMeditation()
            .then((response) => {
                console.log(response);
                this.setState({
                    meditation: response
                });
            });

        youtubeService.getYoga()
            .then((response) => {
                console.log(response);
                this.setState({
                    yoga: response
                });
            });

            
    }
    
    render() {
        return(
               <div> 
                <Sentence />
                <div>              
                    <YouTube videoId={this.state.meditation}   /> 
                    {/* opts={this.state.opts}                 */}
                </div>
                <div>              
                    <YouTube videoId={this.state.yoga}  />                 
                </div>
               </div> 
            )
    }
}

export default ListProjects;

/*
https://www.npmjs.com/package/react-youtube
<YouTube
  videoId={string}                  // defaults -> null
  id={string}                       // defaults -> null
  className={string}                // defaults -> null
  containerClassName={string}       // defaults -> ''
  opts={obj}                        // defaults -> {}
  onReady={func}                    // defaults -> noop
  onPlay={func}                     // defaults -> noop
  onPause={func}                    // defaults -> noop
  onEnd={func}                      // defaults -> noop
  onError={func}                    // defaults -> noop
  onStateChange={func}              // defaults -> noop
  onPlaybackRateChange={func}       // defaults -> noop
  onPlaybackQualityChange={func}    // defaults -> noop
/>

*/
