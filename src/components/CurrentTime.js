import clouds from '../img/cloud.svg';
import rain from '../img/rain.svg';
import humidity from '../img/humidity.svg';

function CurrentTime({ jobs }) {
  return (
    <div className={jobs.current.temp_c > 2 ? 'info backgroundHot' : 'info'}>
      <h2 className="info-location">
        {jobs.location.country}, <b>{jobs.location.name}</b>
      </h2>
      <div className="info-temp">
        <p className="info-celsius">{jobs.current.temp_c}°C</p>
        {/* <img className="info-img" src={jobs.current.condition.icon} alt="" /> */}
      </div>
      <div className="info-extra">
        <div className="info-data">
          <img src={humidity} alt="" className="info-icon" />
          <p className="info-valor">{jobs.current.humidity} %</p>
          <p className="info-categorie">Humidity</p>
        </div>
        <div className="info-data">
          <img src={clouds} alt="" className="info-icon" />
          <p className="info-valor">{jobs.current.cloud}%</p>
          <p className="info-categorie">Clouds</p>
        </div>
        <div className="info-data">
          <img src={rain} alt="" className="info-icon" />
          <p className="info-valor">{jobs.current.precip_mm}</p>
          <p className="info-categorie">rainfall</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentTime;
