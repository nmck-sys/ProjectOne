// Define the API URL
const apiUrl = 'https://dogapi.dog/api/v2/facts';

const weatherMan = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

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
<<<<<<< HEAD
<<<<<<< Updated upstream

	//Weather Function Uses Tokyo Japan as a placeholder

    		async function getWeather() {
		
			const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m');
		
			const data = await response.json();
			
			const weatherElement = document.getElementById('weather');
			const temperature = data.hourly.temperature_2m[0];

			weatherElement.innerHTML = `<h4>Temperature: ${temperature}°C</h4>`; 

	}
=======
>>>>>>> Stashed changes
=======
>>>>>>> a1b25725d7360c588936d9b4cfc9c3f2005961ef
