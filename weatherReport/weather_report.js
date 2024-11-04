function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherInfo = document.getElementById('weatherInfo');
    const errorInfo = document.getElementById('errorDiv');

    weatherInfo.innerHTML = `<p>Please wait...</p>`;
    errorInfo.innerText = '';
    fetch(apiUrl)
    .then(response => {
        console.log('HTTP Status Code:', response.status);
        if (response.ok) {
            // Status code in the range 200-299
            return response.json(); // Parse response as JSON if the request was successful
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }).then(data => {
      console.info('Raw data:', data);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    }).catch(error => {
        console.error('Error fetching weather:', error);
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        errorInfo.innerText = error;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );