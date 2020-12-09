import React from 'react';
import Iframe from 'react-iframe'

class Video extends React.Component {
    state = {
        videoUrl: ''
    }

    componentDidMount() {
       this.getVideo();
    }

     getVideo = () => {
        const videosParam = this.props.match.params.videoId;
        const videosList = videosParam.split(",");
        const index = Math.floor(Math.random() * videosList.length)
        this.setState({
            videoUrl: videosList[index]
        })
    }

  
    render() {
        return(
               <div> 
                <div>              
                <Iframe url={`http://www.youtube.com/embed/${this.state.videoUrl}`}
                    width="100%"
                    height="600px"
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

export default Video;
