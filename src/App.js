// Environment dependencies
import React from 'react';

// Material icon(s)
import Mic from '@material-ui/icons/Mic';
import Videocam from '@material-ui/icons/Videocam';
import MicOff from '@material-ui/icons/MicOff';
import VideocamOff from '@material-ui/icons/VideocamOff';

/**
 * App component (main)
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cam: true,
      mic: true
    }
  }

  render() {
    return (
      <span className='content'>

        <video>
          Sorry, your browser doesn't support embedded videos
        </video>

        <span className='controls'>

          <div id="audio-playback" onClick={() => this.setState({ ...this.state, cam: !this.state.cam })} className="btn-floating btn-large waves-effect waves-light red">
            {(this.state.cam) ? <Videocam /> : <VideocamOff />}
          </div>

          <div id="video-playback" onClick={() => this.setState({ ...this.state, mic: !this.state.mic })} className="btn-floating btn-large waves-effect waves-light red">
            {(this.state.mic) ? <Mic /> : <MicOff />}
          </div>

        </span>
      </span>
    )
  }
};

export default App;
