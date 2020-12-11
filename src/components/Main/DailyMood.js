import React from 'react';
import MoodService from '../../utils/mapi';
import { withRouter } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import './DailyMood.css';
class DailyMood extends React.Component {
  state = {
     moodOfTheDay: ""
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
                transition: Zoom,
                limit: 1
            });
    event.preventDefault();
    const moodService = new MoodService();
    const userId = localStorage.getItem("loggedInUser");

    let moodOfTheDay = this.state.moodOfTheDay
    moodService.updateMood(userId, {moodOfTheDay}).then(() => {
      setTimeout(() => {
            this.props.history.push(`/moodboard/${userId}`)
            }, 1000);
    });
  }
  
  render() {
      return(
        <div className="main-daily-container">
          <div> 
            <img className='image-bg1' src={`/images/Evasion4.png`} alt="Aloha"/>
          </div>
          <div>
          <form onSubmit={this.handleFormSubmit}>
            <h4 className='title-mood-daily'>What's your mood today?</h4>
              <br/> 
            <div className="daily-mood-form container">
              <div className="inline">
                <div>
                  <label> Enthusiastic </label>
                </div> 
                <div >
                  <input type="radio" onChange={this.handleChange} value="enthusiastic" name="moodOfTheDay" />      
                </div>
              </div>
              <div className="inline">
                <div>
                <label> Positive </label>
                </div>
                <div>  
                  <input type="radio" onChange={this.handleChange} value="positive" name="moodOfTheDay" />
                </div>
              </div>
              <div className="inline">
                <div>
                  <label> Calm </label>
                </div>
                <div> 
                  <input type="radio" onChange={this.handleChange} value="calm" name="moodOfTheDay" />
                </div>
              </div>
              <div className="inline">
                <div>
                  <label> Anxious </label> 
                </div>
                <div>
                  <input type="radio" onChange={this.handleChange} value="anxious" name="moodOfTheDay"/>
                </div>
              </div>
              <div className="inline"> 
                <div>
                  <label> Overwhelmed </label>
                </div>
                <div>
                  <input type="radio" onChange={this.handleChange} value="overwhelmed"  name="moodOfTheDay"  required/>
                </div> 
              </div>
                <br/>
            </div>
            <button className="daily-mood-button"> Enter your Bubble of Peace </button>
          </form>
          </div>


          <div>
            <div> 
              <img className='image-bg1' src={`/images/Evasion1.png`} alt="Aloha"/>
            </div>
          </div>


         </div> 
      ) 
  }
}

export default withRouter(DailyMood);