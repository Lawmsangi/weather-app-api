const getWeather = async(city) => {
  const apiKey = "d79a1d5f5edf5d38ca03c817d1e12d5b"
  const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            +city
            + "&units=metric&appid="
             +apiKey);

  const data = await response.json();
  return data;
}

export default getWeather