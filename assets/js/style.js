// Define the API URL
const apiUrl = 'https://dogapi.dog/api/v2/facts';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

	//Weather Function Uses Tokyo Japan as a placeholder

    		async function getWeather() {
		
			const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m');
		
			const data = await response.json();
			
			const weatherElement = document.getElementById('weather');
			const temperature = data.hourly.temperature_2m[0];

			weatherElement.innerHTML = `<h4>Temperature: ${temperature}°C</h4>`; 

	}