async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "e4bd08b8d871623ca15f4fff06b6f7d5"; // Get it from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod !== 200) throw new Error(data.message);

    // Convert sunrise/sunset from UNIX to readable time
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
document.getElementById("weatherResult").style.display = "inline-block";
document.getElementById("weatherResult").innerHTML = `
  <h2>${data.name}, ${data.sys.country}</h2>
  <div class="grid">
    <div><strong>Temperature:</strong> ${data.main.temp}°C</div>
    <div><strong>Feels Like:</strong> ${data.main.feels_like}°C</div>
    <div><strong>Weather:</strong> ${data.weather[0].description}</div>
    <div><strong>Humidity:</strong> ${data.main.humidity}%</div>
    <div><strong>Pressure:</strong> ${data.main.pressure} hPa</div>
    <div><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    <div><strong>Sunrise:</strong> ${sunrise}</div>
    <div><strong>Sunset:</strong> ${sunset}</div>
  </div>
`;

  } catch (err) {
    document.getElementById("weatherResult").innerHTML = `<p>Error: ${err.message}</p>`;
  }
}
