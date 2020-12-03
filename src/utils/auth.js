import axios from 'axios'

// This file will have all the method to signup, login, and so on.
class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT_API}/api`,
            // send authenticated encripted info back to the server. Cela permet de garder un message de bienvenue et un 
            // mode user connecté, même si le user rafraichit. 
            // cela grace à un cookie qui est envoyé au serveur et celui peut interpréter que ce user est connecté.
            // This is settting Set-Cookie on the header request.
            withCredentials: true
        });
        this.service = service;
    }

    signup =  (username, password) => {
        return this.service.post('/signup', {username, password})
    }

    login = (username, password) => {
        return this.service.post('/login', {username, password})
    }

    logout = () => {
        return this.service.post('/logout')
    }

    // This returns if the user is either a active session or not.
    loggedin = () => {
        return this.service.get('/loggedin')
    }
}

export default AuthService;