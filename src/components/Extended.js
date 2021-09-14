import React from 'react';

function Extended({ day }) {
  return (
    <div className="info-forec">
      <h3 className="info-hour">{day.date.slice(5)}</h3>
      <img src={day.day.condition.icon} alt="time-icon" className="info-time" />
      <p className="info-forecastTemp">{day.day.maxtemp_c}°</p>
    </div>
  );
}

export default Extended;
