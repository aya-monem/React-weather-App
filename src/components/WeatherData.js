import React from 'react'

 const WeatherData = (props) => {
    const {weatherObject , loading , error} = props
 return(
    <div className="weather-data" >

        { loading === true && <p></p> }

        {/* { (loading === true && error === true ) && 
          <p className='error'>City not found, please check spelling</p>
        } */}

        { (loading === false && error === true ) && 
          <p className='error'>City not found, please check spelling</p>
        }

        {(loading === false && error === false ) && 
         <div >
            <p>{weatherObject.name}, {weatherObject.sys.country}</p>
            <p>{weatherObject.weather[0].main}</p>
            <p>{Math.round(weatherObject.main.temp-273.15) }°</p>
            <p>
                <span className='max-temp'>{Math.round(weatherObject.main.temp_max-273.15)} °</span> 
                <span className='min-temp'>{Math.round(weatherObject.main.temp_min-273.15)} °</span>
            </p>
            <p>{weatherObject.weather[0].description}</p>
         </div>
        }
         
         
 
        
        

   </div>
 )
}

export default WeatherData

// {/* { ( error === true && loading === false) &&
//           <p className='error'>Please enter city Name</p>
//         } */}