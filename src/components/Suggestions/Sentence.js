import React from 'react';
import allSentences from '../../sentences.json';

class Sentence extends React.Component {
    state = {
        sentencesArray: allSentences.sentences,
        dailySentence: {}
    }

    //MOOD 
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
      <div className="Sentence">
          {this.state.dailySentence.sentence}
      </div>
    );
  }
}

export default Sentence;