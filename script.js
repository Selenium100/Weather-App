const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ebd75084emshd5278f02e14bcd0p1c62d6jsne226b76f5f44',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
    const weatherPrint = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        Sanghai_cloud_pct.innerHTML = response.cloud_pct,
        Sanghai_feels_like.innerHTML = response.feels_like,
        Sanghai_humidity.innerHTML = response.humidity,
        Sanghai_max_temp.innerHTML = response.max_temp,
        Sanghai_min_temp.innerHTML = response.min_temp,
        Sanghai_sunrise.innerHTML = response.sunrise,
        Sanghai_sunset.innerHTML = response.sunset,
        Sanghai_temp.innerHTML = response.temp,
        Sanghai_wind_degree.innerHTML = response.wind_degrees,
        Sanghai_wind_speed.innerHTML = response.wind_speed,
        console.log(response)})
    .catch(err => console.error(err));
    }

    weatherPrint('Shanghai')


    const weatherPrintBbsr = (city) => {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            Bhubaneswar_cloud_pct.innerHTML = response.cloud_pct,
            Bhubaneswar_feels_like.innerHTML = response.feels_like,
            Bhubaneswar_humidity.innerHTML = response.humidity,
            Bhubaneswar_max_temp.innerHTML = response.max_temp,
            Bhubaneswar_min_temp.innerHTML = response.min_temp,
            Bhubaneswar_sunrise.innerHTML = response.sunrise,
            Bhubaneswar_sunset.innerHTML = response.sunset,
            Bhubaneswar_temp.innerHTML = response.temp,
            Bhubaneswar_wind_degree.innerHTML = response.wind_degrees,
            Bhubaneswar_wind_speed.innerHTML = response.wind_speed,
            console.log(response)})
        .catch(err => console.error(err));
        }

        weatherPrintBbsr('Bhubaneswar')


const getWeather = (city) => {
    cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        cloud_pct.innerHTML = response.cloud_pct,
        feels_like.innerHTML = response.feels_like,
        humidity.innerHTML = response.humidity,
        max_temp.innerHTML = response.max_temp,
        min_temp.innerHTML = response.min_temp,
        sunrise.innerHTML = response.sunrise,
        sunset.innerHTML = response.sunset,
        temp.innerHTML = response.temp,
        wind_degrees.innerHTML = response.wind_degrees,
        wind_speed.innerHTML = response.wind_speed,
        console.log(response)})
	.catch(err => console.error(err));
    }

    submit.addEventListener("click" , (e) => {
        e.preventDefault();
        getWeather(city.value);
    })

    getWeather("Delhi")





