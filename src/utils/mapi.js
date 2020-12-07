import axios from 'axios';


class MoodService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT_API}/api`,
            withCredentials: true
        });
        this.service = service;
    }

    updateMood(userId, moodOfTheDay) {
        return this.service.put(`/user/${userId}/mood`, moodOfTheDay);
    }

    getTheMoodOfTheDay(userId) {
        return this.service.get(`/user/${userId}/mood`);
    }
  
    getTheMoodAttributes(mood) {
        return this.service.get(`/moods/${mood}`)
    }

    getMoodHistory(userId) {
        return this.service.get(`/graph/${userId}`)
    }
}


export default MoodService;