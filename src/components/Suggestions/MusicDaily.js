import React from 'react';
import SpotifyService from '../../utils/sapi';
import SpotifyPlayer from 'react-spotify-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicDaily.css';

class MusicDaily extends React.Component {

    
    state = {
        dailyPlaylist: [],
        mood: this.props.mood,
        spotifyURI: this.props.spotifyURI,
        userId: this.props.userId,
    }

    componentDidMount() {
        const spotifyService = new SpotifyService();
 
        let spotifyURI = this.state.spotifyURI;
      
        spotifyService.getDailyPlaylist(spotifyURI)
            .then((response) => {
                console.log("The response from API call is: ", response.data);
                
                let previews = response.data.tracks.items.map((item) => {
                    return {
                        preview_url: item.track.preview_url,
                        artist: item.track.album.artists.name,
                        track: item.track.album.name,
                    };
                });
                console.log("this is the copy array", previews)
                let resultMusic = [];
              
                for (let i = 0; i < 3; i++) {
                  let randomNumber = Math.floor(Math.random() * previews.length)
                  resultMusic.push(previews[randomNumber])
                  previews.splice(randomNumber, 1)
                }
                this.setState({
                  dailyPlaylist: resultMusic
                })
            });
    }


    render() {

        return(
            <div>
   
            <h6>Based on your mood, we thought you might like:</h6>
                {this.state.dailyPlaylist.map((music, index) => {
        
                    return (
                        <div className='track-bloc' key={index}>
                        <h6>{music.track}</h6>
                        <h5>{music.artist}</h5>
                        <AudioPlayer className="audio-compo"
                            // autoPlay
                            src={music.preview_url}
                            onPlay={e => console.log("onPlay")}
                            showSkipControls="true"
                            // other props here
                        />
                     
                          {/*
                        <audio controls>
                                <h5>Track title</h5>
                                <h6>Artist</h6>
                                <source src={preview_url} type="audio/mpeg" />
                        </audio>
                      
                        <SpotifyPlayer
                            uri={preview_url}
                            size= "compact"
                            view='list'
                            theme='white'
                            className='spotify-player'
                        />
                            
                       Other approach: use the audio
                        <audio controls>
                                <source src={preview_url} type="audio/mp3" />
                        </audio>
                        */}

                      </div> 
                    )
               })}   
            </div> 
        )
    }
}

export default MusicDaily;

