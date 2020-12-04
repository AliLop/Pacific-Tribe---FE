import React from 'react';
import YoutubeService from '../../utils/yapi';
//import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

class YogaVideo extends React.Component {
    state = {
        yogaUrl: this.props.yogaurl,
        yogaVideo: '',
        //prop

        opts: {
               height: '390',
               width: '640',
               playerVars: {
                 autoplay: 1,
                  color: "blue"
               }
             }
    }

    componentDidMount() {
        const youtubeService = new YoutubeService();
        youtubeService.getYoga(this.state.yogaUrl)
            .then((response) => {
                console.log(response);
                this.setState({
                    yogaVideo: response
                });
            });
  
    }
    
    render() {
        return(
               <div> 
                <div>              
                    <YouTube videoId={this.state.yoga}  />                 
                </div>
               </div> 
            )
    }
}

export default YogaVideo;

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