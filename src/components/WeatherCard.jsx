import { WiHumidity } from 'react-icons/wi'
import { FiWind } from 'react-icons/fi'

function WeatherCard({ weather, aqi }) {
    const getAqiLabel = (aqi) => {
        const labels = {
            1: { text: 'Good', color: '#4ade80' },        // soft green
            2: { text: 'Fair', color: '#a3e635' },         // soft yellow-green
            3: { text: 'Moderate', color: '#fb923c' },     // soft orange
            4: { text: 'Poor', color: '#f87171' },         // soft red
            5: { text: 'Very Poor', color: '#c084fc' },    // soft purple
        }
        return labels[aqi] || { text: 'Unknown', color: 'white' }
    }

  const aqiInfo = getAqiLabel(aqi)

    return (
        <div className="weather-card">
        <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
        />
        <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
        <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
        <p className="description">{weather.weather[0].description}</p>

        {aqi && (
            <div className="aqi">
                <span>AQI- </span>
                <span style={{color: aqiInfo.color, fontWeight: 600 }}>
                    {aqiInfo.text}
                </span>
            </div>
        )}

        <div className="details">
            <div className="detail-item">
            <WiHumidity size={30} />
            <p>{weather.main.humidity}%</p>
            <span>Humidity</span>
            </div>
            <div className="detail-item">
            <FiWind size={24} />
            <p>{weather.wind.speed} m/s</p>
            <span>Wind Speed</span>
            </div>
        </div>
        </div>
    )
}

export default WeatherCard