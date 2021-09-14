import React from 'react';
import { BiSearch } from 'react-icons/bi';
import CurrentTime from './CurrentTime';
import Extended from './Extended';
import Forecast from './Forecast';

function Form({ setInput, input, jobs, fetchJobs, forecast, extendend }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (input === '') {
      alert('Enter at least one character');
    } else {
      fetchJobs();
    }
  }
  function handleChange(e) {
    setInput(e.target.value);
  }

  // function handleClick() {
  //   if (input === '') {
  //     alert('Ingresa al menos un caracter');
  //   } else {
  //     fetchJobs();
  //   }
  // }

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form-title">Type your city...</h1>
          <div className="form-container">
            <input
              type="text"
              placeholder="Search your city..."
              className="form-input"
              value={input}
              onChange={handleChange}
              autoFocus
            />
            <button type="submit" className="form-search">
              <BiSearch />
            </button>
          </div>
        </form>
        <CurrentTime jobs={jobs} />
        <div className="info bgCard">
          <h2 className="bgCard-Title">
            <span className="bgCard-span">The weather today in </span>
            {jobs.location.name}
          </h2>
          {forecast.map((job, i) => (
            <Forecast key={i} job={job} />
          ))}
        </div>
        <div className="info extended">
          <h2 className="bgCard-Title">Forecast</h2>
          {extendend.map((day, i) => (
            <Extended key={i} day={day} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Form;
