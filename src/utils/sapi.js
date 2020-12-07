import axios from 'axios';

class SpotifyService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT_API}/api`
        });
        this.service = service;
    }

    getDailyPlaylist(spotifyURI) {
        return this.service.get(`/music/${spotifyURI}`);
    }

}

export default SpotifyService;