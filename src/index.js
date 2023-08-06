import displayTime from "./modules/date";
import display from "./modules/displayWeather";
import getWeather from "./modules/getWeather";
import './style.css';

async function component() {
     window.addEventListener('DOMContentLoaded', () => {
        displayTime();
    }, false);

    const locationList = document.querySelectorAll('li');
    locationList.forEach((item)=>{
        item.addEventListener('click',async ()=>{
            const weatherData = await getWeather(item.innerHTML);
            display(weatherData);
        })
    })
    
    const weatherData = await getWeather("Aizawl");
    display(weatherData);

}
component();