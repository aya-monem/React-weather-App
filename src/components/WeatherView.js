import React , { useState } from 'react'
import WeatherData from './WeatherData';

const WeatherView = () => {
    let [city, setCity] = useState('');
    let [weatherObject, setWeatherObject] = useState({});
    let [loading , setLoading ] = useState(true);
    let [error , setError] = useState(false)


    function getWeather(e){
        
        const ApiKey = process.env.REACT_APP_API_KEY
        e.preventDefault();
       
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ApiKey}`)
      .then(res => res.json())
      .then((data) => {
        
        if(data.cod !== 200){
            setError(true)
            setLoading(false)
        }
        else{
            setWeatherObject(data)
            setLoading(false)
            setError(false)
        }
          
      })
      .catch(console.log , setLoading(true));
   
  
    }
    return(
        <div className='weather-view-container'>
            <form onSubmit={getWeather}>
                <input placeholder='City Name'
                value={city} required
                onChange={(e) => setCity(e.target.value)}/>

                <button type='submit'>
                    find
                </button>
            </form>
            <WeatherData weatherObject={weatherObject} loading={loading} error={error}/>       
        </div>
    )
}
export default WeatherView