import React from 'react';
import { toast, Zoom } from 'react-toastify';
import './Chaman.css'
class Chaman extends React.Component {
    state = {
        description: "",

    }
    handleChange = (event) => {
        let { name, value } = event.target;

         this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
      event.preventDefault();
      toast("Forget about it now...Feeling ligther already?", { 
        position: "bottom-left", 
        autoClose: 3000, 
        hideProgressBar: true,
        transition: Zoom,
    })
    this.setState({
        description: ""
    })
    }
    render() {
        return(
            <div className="section">
                <div> 
                    <img className='chaman-pic' src={`/images/SignupV4.png`} alt="Aloha"/>
                </div>
                <div className="vent-info"> 
                    <p><small>Let go off your negative thoughts and worries
                     by using the power of writting 
                    and share them with your personal chaman... </small></p>
                    <br/>
                    <small><strong>Get your negative thoughts and frustrations off your chest <br/>so they stop blocking you!</strong></small>
                </div>
                <div >
                    <form onSubmit={this.handleFormSubmit} className="form-message">
                        <br/>
                        <label>Send your feelings to the wind</label> 
                        <textarea placeholder="Message" type="textarea" name="description"  rows="8" cols="40" onChange={this.handleChange} value={this.state.description}></textarea>
                        <br/>
                        <button>Let go!</button>
                        <br/>
                    </form>
                </div>
            </div> 
        )
    }
}
export default Chaman;
