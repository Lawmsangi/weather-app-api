import getWeather from "./getWeather";

const display = async (data) => {
    console.log(data);
    const { name } = data;
    const { temp, humidity } = data.main;
    const { description, icon } = data.weather[0];
    const { speed } =data.wind;
    const {country} = data.sys;
    
    const weatherCity = document.getElementById('weather-city');
    const weatherDetails = document.querySelector('.weather-details');
    const descriptionName = document.querySelector('#description');
    const temperature = document.querySelector('#temperature');
    const image = document.querySelector('.icon');

    weatherCity.innerHTML = `${name}`
    temperature.innerHTML = `${parseInt(temp)}° `
    descriptionName.innerHTML = `${description}`
    image.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    weatherDetails.innerHTML = ` 
                                <p>Country <span> ${country} </span></p>
                                <p>Temperature <span>${parseInt(temp)}° </span></p>
                                <p>Humidity <span> ${humidity}% </span></p>
                                <p>Wind speed <span> ${speed}km/hr </span></p> `
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name + "')"

    const input = document.querySelector('input')
    const button = document.querySelector('button')
    
    const search = async (city) => {
        const weatherData = await getWeather(city);
        display(weatherData); 
        input.value = '';
    }

    button.addEventListener('click',()=>{
        const cityName = input.value;
        search(cityName)
    })

    input.addEventListener('keyup',(e)=>{
        if(e.key === 'Enter'){
            const cityName = input.value;
            search(cityName)
        }
    })
}

export default display