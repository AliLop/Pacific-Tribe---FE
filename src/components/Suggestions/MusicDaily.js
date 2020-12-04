// import React from 'react';
// import SpotifyService from '../../utils/sapi';
// import SpotifyPlayer from 'react-spotify-player';


// class MusicDaily extends React.Component {
//     state = {
//         musicsDaily: [],
//         mood: this.props.mood.name
//     }

//     let mood = this.state.mood

//     switch (mood) {
    
//         case "overwhelmed":
//             playlist = "Hallo";
//             break;
//         case "anxious":
//             greeting = "Hello";
//             break;
//         case "calm":
//             greeting = "Ola";
//             break;
//         case "positive":
//             greeting = "Bonjour";
//             break;
//         case "enthusiastic":
//             greeting = "Bonjour";
//             break;
//         }



//     componentDidMount() {
//         const spotifyService = new SpotifyService();
//         spotifyService.getOverwhelmedPlaylist()
//             .then((response) => {
//                 console.log("The response from API call is: ", response.data.tracks.items);
//                 this.setState({
//                     musicsDaily: response.data.tracks.items
//                 });
//             });
//     }


//     render() {

//         return(
//             <div>
//             <h3>Based on your mood, we thought you might like:</h3>
//                 {this.state.musicsDaily.map((track, index) => {
        
//                     return (
//                         <div className='track-bloc' key={index}>
//                         <audio controls>
//                                 <source src={track.track.preview_url} type="audio/mpeg" />
//                         </audio>

//                         <SpotifyPlayer
//                             uri={track.track.uri}
//                             size= "compact"
//                             view='list'
//                             theme='white'
//                             className='spotify-player'
//                         />



//                        {/*
//                         <audio controls>
//                                 <source src={track.track.href} type="audio/mp3" />
//                         </audio>
//                         */}
//                         </div>
//                     )
//                 })}  
//             </div>
//         )
//     }
// }

// export default MusicDaily;

