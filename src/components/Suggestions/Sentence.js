import React from 'react';
//import allSentences from '../../sentences.json';

class Sentence extends React.Component {
    state = {
        sentencesArray: this.props.sentences,
        //allSentences.sentences
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
          {this.state.dailySentence}
          {/* .sentence */}
      </div>
    );
  }
}

export default Sentence;