import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [aqi, setAqi]=useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const fetchWeather = async () => {
    setLoading(true)
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
    const data = await response.json()

    if (data.cod === 200) {
      setWeather(data)
      setError('')

      const { lat, lon } = data.coord
      const aqiResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      const aqiData = await aqiResponse.json()
      setAqi(aqiData.list[0].main.aqi)

    } else {
      setWeather(null)
      setError('City not found. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="app">
      <h1>Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} aqi={aqi}/>}
    </div>
  )
}

export default App