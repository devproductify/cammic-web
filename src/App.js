// Environment dependencies
import React from 'react';

// Material icon(s)
import Mic from '@material-ui/icons/Mic';
import Videocam from '@material-ui/icons/Videocam';
import MicOff from '@material-ui/icons/MicOff';
import VideocamOff from '@material-ui/icons/VideocamOff';

// Video stream configuration
const VideoConfig = {
  audio: false,
  video: {
    width: {
      ideal: 480
    },
    height: {
      ideal: 320
    },
    frameRate: {
      ideal: 24,
      max: 32
    }
  }
};

// Audio stream configuration
const AudioConfig = {
  audio: true,
  video: false
}

/**
 * App component (main)
 */
class App extends React.Component {

  /**
   * Central state for web application
   * @param {object}:any props 
   */
  constructor(props) {
    super(props);
    this.state = {
      cam: true,
      mic: true
    }
  }

  /**
   * Initialize media streams from 'mediaDevices' API
   */
  async componentDidMount() {

    const video = document.getElementById('video');
    const audio = document.getElementById('audio');

    let audioOnly = null;
    let videoOnly = null;

    // Video only
    await navigator.mediaDevices
      .getUserMedia(VideoConfig)
      .then(stream => {

        // Append video stream
        videoOnly = stream;
        video.srcObject = stream;
        video.onloadedmetadata = (e) => video.play();
        video.muted = true;

      })
      .catch(err => console.log(err));

    // Audio only
    await navigator.mediaDevices
      .getUserMedia(AudioConfig)
      .then(stream => {

        // Append audio stream
        audioOnly = stream;
        audio.srcObject = stream;
        audio.onloadedmetadata = (e) => audio.play();
        audio.muted = false;

      })
      .catch(err => console.log(err));

    await this.setState({ ...this.state, audioOnly, videoOnly });

  }

  /**
   * Default mic handling behaviour
   */
  micHandler = async () => {

    await this.setState({ ...this.state, mic: !this.state.mic });
    const audio = document.getElementById('audio');

    if (this.state.mic === false)
      audio.srcObject = null;
    else
      audio.srcObject = this.state.audioOnly;

  }

  /**
   * Default camera handling behaviour
   */
  camHandler = async () => {

    await this.setState({ ...this.state, cam: !this.state.cam });
    const video = document.getElementById('video');

    if (this.state.cam === false)
      video.srcObject = null;
    else
      video.srcObject = this.state.videoOnly;

  }

  /**
   * UI Layout for testing utility
   * @returns JSX.Element
   */
  render() {
    return (
      <span className='content'>

        <video id="video">
          Sorry, your browser doesn't support video streams
        </video>

        <video id="audio">
          Sorry, your browser doesn't support audio streams
        </video>

        <span className='controls'>

          <div id="video-playback" title="Camera" onClick={this.camHandler} className="btn-floating btn-large waves-effect waves-light red">
            {(this.state.cam) ? <Videocam /> : <VideocamOff />}
          </div>

          <div id="audio-playback" title="Microphone" onClick={this.micHandler} className="btn-floating btn-large waves-effect waves-light red">
            {(this.state.mic) ? <Mic /> : <MicOff />}
          </div>

        </span>
      </span>
    )
  }
};

export default App;
