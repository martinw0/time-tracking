import { useState } from 'react';
import profilePicture from './images/image-jeremy.png';
import Data from './data.json';

function App() {
  const [periodicity, setPeriodicity] = useState('daily');
  return (
    <main>
      <div className="informations">
        <div className="user">
          <img src={profilePicture} alt='Profile picture' />
          <h1>Report for<br /><span>Jeremy Robson</span></h1>
        </div>
        <div className="periodicity">
          <ul>
            <li className={periodicity === 'daily' ? 'active' : ''} onClick={() => {setPeriodicity('daily')}}>Daily</li>
            <li className={periodicity === 'weekly' ? 'active' : ''} onClick={() => {setPeriodicity('weekly')}}>Weekly</li>
            <li className={periodicity === 'monthly' ? 'active' : ''} onClick={() => {setPeriodicity('monthly')}}>Monthly</li>
          </ul>
        </div>
      </div>
      { Data && Data.map( stat => {
        return(
          <Card title={stat.title} current={stat.timeframes[periodicity].current} previous={stat.timeframes[periodicity].previous} />
        )
      })}
    </main>
  );
}

function Card(props) {
  return (
    <div className='card'>
      <p>{props.title}</p>
      <p>{props.current}</p>
      <p>{props.previous}</p>
    </div>
  )
}

export default App;