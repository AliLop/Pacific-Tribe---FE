import React from 'react';
import { toast, Zoom } from 'react-toastify';
//import './Login.css';
//import axios from 'axios';
import ContactForm from '../../utils/capi';
import './ContactForm.css'
class ContactUsForm extends React.Component {
   state = {
        name: "",
        email: "", 
        message: "",
        status: "Send"

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
        this.setState({ name: event.target.value });
        } else if (field === "email") {
        this.setState({ email: event.target.value });
        } else if (field === "message") {
        this.setState({ message: event.target.value });
        }
    }

    handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: "Sending" });  

    const contactForm = new ContactForm();
    let data = this.state
    //console.log(`data`, data)
    contactForm.sendContactForm({data})


    .then((response) => {
      if (response.data.status === "sent") {
        toast("Email received!, Thank you for your contact. We will get back to you shortly. ", { 
            position: "bottom-left", 
            autoClose: 3000, 
            hideProgressBar: true,
            transition: Zoom,
        })
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        toast.warn("Oops, it seems there was an issue sending the form, please try again in a few minutes", { 
            position: "bottom-left", 
            autoClose: 3000, 
            hideProgressBar: true,
            transition: Zoom,
        })
      }
    });
  }
    render() {
        let buttonText = this.state.status;
        return(
            <div>
            <div className="container image-contact-container">
            <div className="row">
                <div className="col contact-col">
                    <div> <img className="contact-visual" src="images/Signup-v3.png" alt="signup visual" /></div>
                </div>
                <div className="col contact-col" id="signup-form-container">
                <br/>


                <p className="contact-title">Get in touch</p> 
                <form onSubmit={this.handleSubmit.bind(this)} method="POST" className="form-contact">
                    <div>
                    {/* <label htmlFor="name">Name:</label> */}
                    <input
                    className="input-contact"
                        placeholder="Name"
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    </div>
                    <div>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    </div>
                    <br/>
                    <div>
                    {/* <label htmlFor="message">Message:</label> */}
                    <textarea
                        placeholder="Message"
                        rows="8" cols="40" 
                        id="message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    </div>
                    <button type="submit" className="contact-button-official">{buttonText}</button>
                </form>
                <br/>
          
        </div>   
       </div>
      </div> 
     </div>  
        )
    }
}

export default ContactUsForm;


