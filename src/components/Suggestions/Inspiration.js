import React from 'react';
import Iframe from 'react-iframe'

class InspirationVideo extends React.Component {
    state = {
        inspirationUrl: this.props.inspirationUrl,
        inspirationVideoUrl: ''
    }

    componentDidMount() {
       this.getInspirationVideo();
    }

     getInspirationVideo = () => {
        const index = Math.floor(Math.random() * this.state.inspirationUrl.length)
        this.setState({
            inspirationVideoUrl: this.state.inspirationUrl[index]
        })
    }
    
    render() {
        return(
               <div> 
                <Iframe url={`http://www.youtube.com/embed/${this.state.inspirationVideoUrl}`}
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

export default InspirationVideo;