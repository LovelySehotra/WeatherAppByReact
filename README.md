# WEATHER APP
## Description
This Weather App allows users to check the weather conditions for a specific city. It fetches weather data from the Weather by API Ninjas API and displays it in a user-friendly interface.
## Feature
- Get the current temperature, humidity, and cloud precipitation for a city.
- Display minimum and maximum temperatures.
- Show the "Feels Like" temperature.
- Provide wind speed information.
- Display sunrise and sunset times.
- Handle loading and error states gracefully.
- Easy-to-use interface with a search input and a "Get Weather" button.
### Workflow and Execution

1. Clone the project

```
git clone https://github.com/LovelySehotra/WeatherAppByReact.git
```

2. Move into the directory 

```
cd weatherApp

```
3. install dependencies

```
npm i

```
4. run the server

```
npm run dev

```
### Setup instruction for tailwind 

[Tailwind offical instruction doc](https://tailwindcss.com/docs/guides/vite)



###  Adding pluging and dependencies

```
react react-dom

```
## Usage
1. Start the development server
```
npm run dev
```

2. Open your web browser and navigate to http://localhost:3000 to access the Weather App.

3. Enter the name of the city you want to check the weather for in the input field.

4. Click the "Get Weather" button to fetch and display the weather information.

## Add Custom Hook 
The weather data fetching logic is encapsulated in a custom hook called useWeatherInfo. This hook handles API requests and returns the weather data, loading state, and errors. It can be reused in other parts of your application.
## Technologies Used
* React
* React Router DOM (for routing, if applicable)
* JavaScript
* HTML
* CSS (Tailwind CSS used for styling)
### Credits
Weather data provided by Weather by API Ninjas
