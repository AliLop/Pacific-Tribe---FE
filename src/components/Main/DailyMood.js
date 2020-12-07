import React from 'react';
import MoodService from '../../utils/mapi';
import { withRouter } from 'react-router-dom';

class DailyMood extends React.Component {
  state = {
     moodOfTheDay: "",
     //userId: this.props.loggedInUser._id
  }

 //Il faut récupérer le user dans les props.
 //Et ensuite comment faire passer le mood dans les props.
//   componentDidMount() {
//     const moodService = new MoodService();
//     // can we do this, or do we need to pass the user in the state? 
//     const userId = this.props.match.params.id;

//     moodService.updateMood(userId, moodOfTheDay)
//         .then(() => {
//           this.setState({
//             mood: moodOfTheDay
//           })
//         });
// }

    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const moodService = new MoodService();
    const userId = this.state.userId;

    let moodOfTheDay = this.state.moodOfTheDay
    moodService.updateMood(userId, {moodOfTheDay})
    this.props.history.push(`/moodboard/${userId}`)
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