import React from 'react';
//import YoutubeService from '../../utils/yapi';
//import { Link } from 'react-router-dom';
//import YouTube from 'react-youtube';
import Iframe from 'react-iframe'

class YogaVideo extends React.Component {
    state = {
        yogaUrl: this.props.yogaUrl,
        yogaVideoUrl: ''
        //yogaVideoId: '',

        // opts: {
        //        height: '390',
        //        width: '640',
        //        playerVars: {
        //          autoplay: 1,
        //           color: "blue"
        //        }
        //      }
    }

    componentDidMount() {
       this.getYogaVideo();
    }

     getYogaVideo = () => {
        const index = Math.floor(Math.random() * this.state.yogaUrl.length)
        this.setState({
            yogaVideoUrl: this.state.yogaUrl[index]
        })
    }

    // componentDidUpdate() {
    //         if (this.state.yogaVideoUrl)  {
    //         const youtubeService = new YoutubeService();
    //         youtubeService.getYoga(this.state.yogaVideoUrl)
    //             .then((response) => {
    //                 console.log(response);
    //                 this.setState({
    //                     yogaVideoId: response
    //                 });
    //             });
    //     } else {
    //         return null
    //     }
    // }
    
    render() {
        return(
               <div> 
                <div>              
                     {/* <YouTube videoId={this.state.yogaVideoId}  />                 */}
                <Iframe url={`http://www.youtube.com/embed/${this.state.yogaVideoUrl}`}
                    width="400px"
                    height="350px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allow="fullscreen"
                    />
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