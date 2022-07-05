import { useState } from 'react';
import profilePicture from './images/image-jeremy.png';
import Data from './data.json';
import iconPlay from './images/icon-play.svg';
import iconWork from './images/icon-work.svg';
import iconStudy from './images/icon-study.svg';
import iconExercise from './images/icon-exercise.svg';
import iconSocial from './images/icon-social.svg';
import iconSelfCare from './images/icon-self-care.svg';
import iconOptions from './images/icon-ellipsis.svg';

const icons = {
  "Play": iconPlay,
  "Work": iconWork,
  "Study": iconStudy,
  "Exercise": iconExercise,
  "Social": iconSocial,
  "Self Care": iconSelfCare
}

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
    <div className={'card ' + props.title.toLowerCase().replace(/ /g,'-')}>
      <div>
        <img src={icons[props.title]} alt="Category icon" />
      </div>
      <div className='stats'>
        <div className='title'>
          <p>{props.title}</p>
          <img src={iconOptions} alt={'Options for ' + props.title + ' category'} />
        </div>
        <div>
          <p>{props.current}Hrs</p>
          <p>Last week - {props.previous}hrs</p>
        </div>
      </div>
    </div>
  )
}

export default App;
