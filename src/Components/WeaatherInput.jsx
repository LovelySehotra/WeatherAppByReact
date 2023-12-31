import React, { useState } from 'react';
import useWeatherInfo from '../hooks/useWeatherInfo';

function WeatherApp() {
    const [city, setCity] = useState('Delhi');
    const { weatherData, loading, error, getWeather } = useWeatherInfo(); // Use the custom hook

    const handleGetWeather = () => {
        getWeather(city);
    };
    function formatTime(timestamp) {
        const date = new Date(timestamp * 1000); // Convert the timestamp to milliseconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        // Format the time in 12-hour format with AM/PM
        const timeString = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
      
        return timeString;
      }
      

    return (
        <>
    
        <div className="flex flex-col lg:justify-center items-center  h-screen lg:bg-[url('./assets/bgImage.jpg')] bg-[length:100vw_100vh] bg-no-repeat ">
            <div className=' mt-8 rounded-xl'>
                <input
                    className='w-96 h-10 border bg-slate-300  border-black rounded-xl mr-6 p-5'
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
                <button className=' bg-sky-400 rounded-md border border-sky-400 h-9 w-36' onClick={handleGetWeather}>Get Weather</button>
            </div>
            {loading && <p className="tracking-wider text-xl text-center">Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {weatherData && (
                <div className=" lg:flex flex-col text-black justify-center gap-3 sm:flex ">
                    <h1 className=" font-extrabold tracking-wider text-xl text-center py-3"><span ></span>{city}'s Weather</h1>
                    <main>
                        <div className=" lg:flex gap-3 justify-evenly py-4 my-4 ">
                            <div className="bg-white rounded-xl">
                                <div className="rounded-xl border border-sky-400 w-96 h-64 flex flex-col  py-0">
                                    <div className="bg-sky-400 rounded-md ">
                                        <h4 className="text-center tracking-wider text-xl py-3">Temperature Info</h4>
                                    </div>
                                    <div className=" card-body text-center flex flex-col gap-8 pt-1 text-xl">
                                        <h1 className=""> <span ></span>{weatherData.temp}&deg;C</h1>
                                        <ul className="list-unstyled mt-3 mb-4">

                                            <li>
                                                Min Temperature is : <span >{weatherData.min_temp}&deg;C</span>
                                            </li>
                                            <li>
                                                Max Temperature is : <span >{weatherData.max_temp}&deg;C</span>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="rounded-md border border-sky-400 w-96 h-64 flex flex-col  py-0">
                                    <div className="bg-sky-400 rounded-md ">
                                        <h4 className="text-center tracking-wider text-xl py-3">Humidity</h4>
                                    </div>
                                    <div className="card-body text-center flex flex-col gap-8 pt-1 text-xl">
                                        <h1 className="card-title pricing-card-title"> <span id="temp"></span>{weatherData.humidity}%</h1>
                                        <ul className="list-unstyled mt-3 mb-4">

                                            <li>
                                                Cloud Precipitation is : <span >{weatherData.cloud_pct}%</span>
                                            </li>
                                            <li>
                                                Feel Like is : <span >{weatherData.feels_like}&deg;C</span>
                                            </li>
                                        </ul>
                                        {/* <button type="button" className="bg-sky-400 rounded-md border border-sky-400">{city}</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl">
                                <div className="rounded-md border border-sky-400 w-96 h-64 flex flex-col  py-0">
                                    <div className="bg-sky-400 rounded-md ">
                                        <h4 className="text-center tracking-wider text-xl py-3">Wind</h4>
                                    </div>
                                    <div className="card-body text-center flex flex-col gap-8 pt-1 text-xl">
                                        <h1 className="card-title pricing-card-title"> <span id="temp"></span>{weatherData.wind_speed}mph</h1>
                                        <ul className="list-unstyled mt-3 mb-4">

                                            <li>
                                                Sunrise is : <span id="min_temp">{formatTime(weatherData.sunrise)}</span>
                                            </li>
                                            <li>
                                                SunSet is : <span id="max_temp">{formatTime(weatherData.sunset)}</span>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>


                        </div>

                      


                    </main>
                </div>
            )}

        </div>
        </>
    );
}

export default WeatherApp;
