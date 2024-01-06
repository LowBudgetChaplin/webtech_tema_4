import { useState, useEffect } from 'react';
import store from '../stores/RobotStore';
import Robot from './Robot';
import RobotForm from './RobotForm';

function RobotList() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    
    const updateRobots = () => setRobots(store.getRobots());
    setRobots(store.getRobots());
    store.emitter.addEventListener('UPDATE', updateRobots);


    return () => {
      store.emitter.removeEventListener('UPDATE', updateRobots);
    };
  }, []);

  return (
    <div>
      <div>
        {robots.map((e, i) => (
          <Robot item={e} key={i} />
        ))}
      </div>
      <RobotForm />
    </div>
  );
}

export default RobotList;
