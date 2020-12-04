import React from 'react';
import SpotifyService from '../../utils/sapi';
import SpotifyPlayer from 'react-spotify-player';


class MusicDaily extends React.Component {
    state = {
        dailyPlaylist: [],
        mood: this.props.mood,
        userId: this.props.loggedUser.id
    }

    componentDidMount() {
        const spotifyService = new SpotifyService();
        let userId = this.state.userId;
        console.log(userId)
        spotifyService.getDailyPlaylist(userId)
            .then((response) => {
                console.log("The response from API call is: ", response.data.tracks.items);
                let copy = [...response.data.tracks.items];
                let result = [];
                for (let i = 0; i < 3; i++) {
                  let randomNumber = Math.floor(Math.random * this.state.dailyPlaylist.length)
                  result.push(copy[randomNumber])
                  copy.splice(randomNumber, 1)
                }
                this.setState({
                  dailyPlaylist: result
                })
            });
    }


    render() {

        return(
            <div>
            <h3>Based on your mood, we thought you might like:</h3>
                {this.state.dailyPlaylist.map((track, index) => {
        
                    return (
                        <div className='track-bloc' key={index}>
                        <audio controls>
                                <h5>Track title</h5>
                                <h6>Artist</h6>
                                <source src={track.track.preview_url} type="audio/mpeg" />
                        </audio>

                        <SpotifyPlayer
                            uri={track.track.uri}
                            size= "compact"
                            view='list'
                            theme='white'
                            className='spotify-player'
                        />



                       {/* Other approach: use the audio
                        <audio controls>
                                <source src={track.track.href} type="audio/mp3" />
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

