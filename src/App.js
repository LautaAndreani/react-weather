import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  // const url =
  //   "http://api.weatherapi.com/v1/current.json?key=d15ed533b41d41f6a03145232212207&q=London&aqi=no";
  const [input, setInput] = useState('Mendoza');
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [extendend, setExtended] = useState([]);
  // const [value, setValue] = useState(0);

  async function fetchJobs() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d15ed533b41d41f6a03145232212207&q=${input}&days=7&aqi=no&alerts=no&lang=es`
    );
    if (response.status === 400) {
      return alert('Location not found, please try again');
    } else {
      const newJobs = await response.json();

      setJobs(newJobs);
      setLoading(false);
      setForecast(newJobs.forecast.forecastday[0].hour.splice(10, 14));
      setExtended(newJobs.forecast.forecastday);
      // setForecast(jobs.forecast.forecastday[0].hour);
    }
  }

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">.</div>
      ) : (
        <Form
          input={input}
          setInput={setInput}
          jobs={jobs}
          fetchJobs={fetchJobs}
          forecast={forecast}
          extendend={extendend}
        />
      )}
    </div>
  );
}

export default App;
