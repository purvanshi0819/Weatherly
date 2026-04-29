import { FiSearch } from 'react-icons/fi'

function SearchBar({ city, setCity, fetchWeather }) {
    return (
        <div className="search">
        <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button onClick={fetchWeather}><FiSearch /></button>
        </div>
    )
}

export default SearchBar