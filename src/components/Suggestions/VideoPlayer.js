import React, { Component } from 'react';
//import { PrismCode } from 'react-prism';
import { Player, ControlBar, PlayToggle } from 'video-react';
import { BigPlayButton } from 'video-react';

export default class PlayerVideoReact extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: this.props.videoSrc,
      muted: false,
      loop: true,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    window.scrollTo(0, 0);
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state, prevState) {
      if (state.currentTime > 0) {
        this.props.trigger();
      }
     
    // copy player state to this component's state
    
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  


  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          loop
          muted
          disableDefaultControls
          aspectRatio="16:9"
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />

          <BigPlayButton onClick="alert()" position="center" />
          
          <PlayToggle />
        </Player>
   
      </div>
    );
  }
}