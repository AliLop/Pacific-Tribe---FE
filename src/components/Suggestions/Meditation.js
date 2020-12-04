import React from 'react';
import YoutubeService from '../../utils/yapi';
//import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';


class MeditationVideo extends React.Component {
    state = {
        meditation: '',
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
        youtubeService.getMeditation()
            .then((response) => {
                console.log(response);
                this.setState({
                    meditation: response
                });
            });            
    }
    
    render() {
        return(
               <div> 
                <div>              
                    <YouTube videoId={this.state.meditation} opts={this.state.opts}  /> 
                </div>
               </div> 
            )
    }
}

export default MeditationVideo;