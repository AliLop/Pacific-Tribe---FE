import React from 'react';
import Iframe from 'react-iframe'


class MeditationVideo extends React.Component {
    state = {
        meditationUrl: this.props.meditationUrl,
        meditationVideoUrl: ''
    }

    componentDidMount() {
       this.getMeditationVideo();
    }

     getMeditationVideo = () => {
        const index = Math.floor(Math.random() * this.state.meditationUrl.length)
        this.setState({
            meditationVideoUrl: this.state.meditationUrl[index]
        })
    }
    
    render() {
        return(
               <div> 
                <Iframe url={`http://www.youtube.com/embed/${this.state.meditationVideoUrl}`}
                    width="400px"
                    height="350px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allow="fullscreen"
                    allowFullScreen="true"
                    />
               </div> 
            )
    }
}

export default MeditationVideo;