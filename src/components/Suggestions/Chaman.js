import React from 'react';
import { toast, Zoom } from 'react-toastify';

class Chaman extends React.Component {

    state = {
        value: ""
    }

    handleChange = (event) => {
        let { name, value } = event.target;
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
        value: ""
    })
    }
   

    render() {

        return(
 

            <div>
            <form onSubmit={this.handleFormSubmit}>
          <label>Send your feelings to the wind</label>
          <input type="textarea" name="description"  rows="4" cols="50" onChange={this.handleChange} value="feeling"/>
          <button>Let it go!</button>
             </form>
            </div> 
            
        )
    }
}

export default EvasionRoom1;

