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
            <div className="section row" style={{backgroundImage: "url('/images/Brown-bar.png')"}}>
                <div> 
                    <img className='chaman-pic' src={`/images/SignupV4.png`} alt="Chaman"/>
                </div>
                <div className="meet-alma-chaman-pacific"> MEET ALMA, YOUR PACIFIC CHAMAN</div>
                <div className="vent-info"> 
                    <p><small>Let go off your negative thoughts and worries
                     by using the power of writting 
                    and share them with your personal chaman... </small></p>
                    <br/>
                    <small><strong>Get your negative thoughts and frustrations off your chest <br/>so they stop blocking you!</strong></small>
                </div>
                <div >
                    <form onSubmit={this.handleFormSubmit} className="form-message container">
   
                        <label></label> 
                        <textarea className="textarea-chaman" placeholder="Message" type="textarea" name="description"  rows="8" cols="40" onChange={this.handleChange} value={this.state.description}></textarea>
                        <button className="chaman-button">Let go!</button>
    
                    </form>
                </div>
            </div> 
        )
    }
}
export default Chaman;
