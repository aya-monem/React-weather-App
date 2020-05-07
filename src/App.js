import React  from 'react'
import  './App.css'
import WeatherView from './components/WeatherView'

function App(){
  
    return (
      <div className="App">
          <h1 className="app-header">
            Just type the city name
          </h1>
          <p className='sub-header'>you must spelling correctly</p>
        <WeatherView /> 
      </div>
    );
  }
  


export default App;
