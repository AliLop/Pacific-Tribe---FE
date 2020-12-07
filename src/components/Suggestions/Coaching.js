import React from 'react';
import Iframe from 'react-iframe'

class CoachingVideo extends React.Component {
    state = {
        coachingUrl: this.props.coachingUrl,
        coachingVideoUrl: ''
    }

    componentDidMount() {
       this.getCoachingVideo();
    }

     getCoachingVideo = () => {
        const index = Math.floor(Math.random() * this.state.coachingUrl.length)
        this.setState({
            coachingVideoUrl: this.state.coachingUrl[index]
        })
    }
    
    render() {
        return(
               <div> 
                <Iframe url={`http://www.youtube.com/embed/${this.state.coachingVideoUrl}`}
                    width="400px"
                    height="400px"
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

export default CoachingVideo;