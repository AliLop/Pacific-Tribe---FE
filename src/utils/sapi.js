import axios from 'axios';

class SpotifyService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT_API}/api`
        });
        this.service = service;
    }

    getOverwhelmedPlaylist(URI) {
        return this.service.get(`/music/${URI}`);
        // post

    }

    getAnxiousPlaylist() {
        return this.service.get('/anxious-music');
    }

    getCalmPlaylist() {
        return this.service.get('/calm-music');
    }

    getPositivePlaylist() {
        return this.service.get('/positive-music');
    }

    getEnthusiasticPlaylist() {
        return this.service.get('/enthusiastic-music');
    }
}

export default SpotifyService;