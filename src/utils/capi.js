import axios from 'axios';

class ContactForm {
    
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT_API}/api`,
            withCredentials: true
        });
        this.service = service;
    }

    sendContactForm = ({data}) => {
        return this.service.post(`/contact-us`, {data});
    }
    
}

export default ContactForm;