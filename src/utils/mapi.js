import axios from 'axios';


class MoodService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT_API}/api`
        });
        this.service = service;
    }

    updateMood(userId, moodOfTheDay) {
        return this.service.put(`/user/${userId}/mood`, moodOfTheDay);
    }

}


export default MoodService;