import React from 'react';
import profilePicture from './images/image-jeremy.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      periodicity: 'Daily'
    }
  }
  render() { 
    return (
      <main>
        <div className="informations">
          <div className="user">
            <img src={profilePicture} alt='Profile pîcture' />
            <h1>Report for<br /><span>Jeremy Robson</span></h1>
          </div>
          <div className="periodicity">
            <ul>
              <li>Daily</li>
              <li>Weekly</li>
              <li>Monthly</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
