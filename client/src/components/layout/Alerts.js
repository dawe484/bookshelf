import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

import './Alerts.css';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className='our-container'>
        <div className='alert-container'>
          <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' />
            {alert.msg}
          </div>
        </div>
      </div>
    ))
  );
};

export default Alerts;
