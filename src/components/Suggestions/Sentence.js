import React from 'react';
import './sentence.css'

class Sentence extends React.Component {
    state = {
        sentencesArray: this.props.sentences,

        dailySentence: ''
    }

     componentDidMount() {
         this.getSentence();
     }

    getSentence = () => {
        const index = Math.floor(Math.random() * this.state.sentencesArray.length)
        this.setState({
            dailySentence: this.state.sentencesArray[index]
        })
    }

    render() {
    return (
      <div className="sentence">
          {this.state.dailySentence.toUpperCase()}
         <br/> 
         <br/>
      </div>
    );
  }
}

export default Sentence;