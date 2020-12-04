import axios from 'axios';
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class YoutubeService {  
    constructor() {
        let service = axios.create({
            baseURL: `https://www.googleapis.com/youtube/v3`,
            //withCredentials: true,
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        });
        this.service = service;  
    }

    //Meditation
    getMeditation() {
        // if (mood === 'positive')  {
            return this.service.get(`/search?q=XGifigan8zQ&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
                  .then((results) => {
                  const final = results.data.items[0].id.videoId;
                  return final;
          })
          .catch(err => {
              console.log(err)
          })

        // } else if ( mood === 'anxiety') {
        //     return this.service.get(`/search?q=5H-gyN7TMEA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        //           .then((results) => {
        //           const final = results.data.items[0].id.videoId;
        //           return final;
        //   })
        //   .catch(err => {
        //       console.log(err)
        //   })
        // }
    }

    //Yoga // &key=${process.env.REACT_APP_GOOGLE_API_KEY}
    getYoga() {
      return this.service.get(`/search?q=UEEsdXn8oG8`)
            .then((results) => {
            const final = results.data.items[0].id.videoId;
            return final;
    })
    .catch(err => {
        console.log(err)
    })
    }

    
    

    
}

export default YoutubeService;