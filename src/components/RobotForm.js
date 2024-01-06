import React, { useState } from 'react';
import store from '../stores/RobotStore';

const RobotForm = () => {
  const [robot, setRobot] = useState({ name: '', type: '', mass: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRobot((prevRobot) => ({
      ...prevRobot,
      [id]: value,
    }));
  };

  const handleAddRobot = () => {
    // Verificăm dacă toate proprietățile robotului au fost completate
    if (robot.name && robot.type && robot.mass) {
      // Verificăm dacă weight-ul este mai mic de 500 și actualizăm starea în consecință
      if (parseInt(robot.mass) < 500) {
        store.addRobot({ ...robot, mass: '' });
      } else {
        store.addRobot(robot);
      }

      // Resetăm starea robotului la valorile inițiale
      setRobot({ name: '', type: '', mass: '' });
    }
  };

  return (
    <div className="robot-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Enter name" value={robot.name} onChange={handleInputChange} />

      <label htmlFor="type">Type:</label>
      <input type="text" id="type" placeholder="Enter type" value={robot.type} onChange={handleInputChange} />

      <label htmlFor="mass">Mass:</label>
      <input type="text" id="mass" placeholder="Enter mass" value={robot.mass} onChange={handleInputChange} />

      <button onClick={handleAddRobot}>add</button>
    </div>
  );
};

export default RobotForm;
