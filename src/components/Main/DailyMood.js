import React from 'react';
import MoodService from '../../utils/mapi';
import { withRouter } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';

class DailyMood extends React.Component {
  state = {
     moodOfTheDay: "",
     userId: this.props.userId
  }

    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

  handleFormSubmit = (event) => {
    toast('Thanks for sharing', { 
                position: "bottom-right", 
                autoClose: 3000, 
                hideProgressBar: true,
                transition: Zoom
            });
    event.preventDefault();
    const moodService = new MoodService();
    const userId = this.state.userId;

    let moodOfTheDay = this.state.moodOfTheDay
    moodService.updateMood(userId, {moodOfTheDay}).then(() => {
      setTimeout(() => {
            this.props.history.push(`/moodboard/${userId}`)
            }, 1500);
      
    });
  }
  
  render() {
      return(
          <div>
          <form onSubmit={this.handleFormSubmit}>
      
            <h4>What's your mood today?</h4>
     
            <label> Overwhelmed </label> <input type="radio" onChange={this.handleChange} value="overwhelmed"  name="moodOfTheDay"  required/>
             
            <label> Anxious </label> <input type="radio" onChange={this.handleChange} value="anxious" name="moodOfTheDay"/>
           
            <label> Calm </label> <input type="radio" onChange={this.handleChange} value="calm" name="moodOfTheDay" />
       
            <label> Positive </label> <input type="radio" onChange={this.handleChange} value="positive" name="moodOfTheDay" />
                    
            <label> Enthusiastic </label> <input type="radio" onChange={this.handleChange} value="enthusiastic" name="moodOfTheDay" />      
    
            <button> Enter your Bubble of Peace </button>
          </form>
          </div>
      ) 
  }
}

export default withRouter(DailyMood);