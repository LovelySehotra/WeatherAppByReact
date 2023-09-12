import { useState, useEffect } from 'react'

const useWeatherInfo = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9725cc86c8msh0fdf57ae05dbc8cp10f6f3jsn62df2a01457f',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        },
    };


    const getWeather = (city) => {
        setLoading(true);
        setError(null)

        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
        fetch(url + city, options)
            .then(response => response.json())
            .then((data) => {
                setWeatherData(data);
                setLoading(false);
            })


            .catch(error =>{
                setError(error);
                setLoading(false);
            })
               

    };
useEffect(() => {
 getWeather();
}, [])

    return { weatherData, loading, error, getWeather };
};
export default useWeatherInfo
