"use client"
import { useEffect, useState } from "react"

const TravelWeather = ({location}) => {

  const [weather, setWeather] = useState()

  useEffect(()=>{
    getWeather()
  },[])

  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=912c622485ebcccfe6e75ebb3dc2de10&lang=pl`)
    const data = await response.json()
    setWeather(data)
  }

  return (
    <div>
        <h3 className='custom-title mb-6 text-3xl font-bold'>{weather?.name} - pogoda</h3>
        <div className='grid grid-cols-3 gap-6'>

             <div className='col-span-1 border-2 p-5 border-black-800 rounded-lg'>
                <span className='text-2xl capitalize'>{weather?.weather[0]?.description}</span>
                <br />
                <div className='flex'>
                   <img src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`} alt="" />
                   <div>
                      <span className="font-bold text-2xl">{(weather?.main?.temp - 272.15).toFixed()}°C</span>
                      <br/>
                      <span >Średnia temperatura dziś</span>
                   </div>
                </div>
             </div>

             <div className='col-span-2 py-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg'>
                
             </div>

        </div>
    </div>
  )
}

export default TravelWeather