import React from 'react';
function Forecast({ job }) {
  return (
    <>
      <div className="info-forec">
        <h3 className="info-hour">{job.time.slice(10)}</h3>
        <img src={job.condition.icon} alt="time-icon" className="info-time" />
        <p className="info-forecastTemp">{job.temp_c}°</p>
      </div>
    </>
  );
}

export default Forecast;
