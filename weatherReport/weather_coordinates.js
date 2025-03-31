function showweatherCoordinates(event) {
      event.preventDefault();

      const lat = document.getElementById('lat').value;
      const lon = document.getElementById('lon').value;
      const apiKey = "1ee478fe5de6ae14a3b7d555ebe3dbcf";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather data. Please check coordinates and try again.</p>`;
        });
}

document.getElementById('weatherCoordinatesForm').addEventListener('submit', showweatherCoordinates);