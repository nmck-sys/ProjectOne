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
        //Line 32 gets time in UTC from users computer
const cities = [

	{
		name: 'New York',
		latitude: 40.7128,
		longitude: -74.0060,
		timeZoneOffset: -4
	},
	{
		name: 'Los Angeles',
		latitude: 34.0522,
		longitude: -118.2437,
		timeZoneOffset: -7
	},
	{
		name: 'Austin',
		latitude: 30.2672,
		longitude: -97.7431,
		timeZoneOffset: -5
	},
	{
		name: 'chicago',
		latitude: 30.2672,
		longitude: -97.7431,
		timeZoneOffset: -5
	}
]


	console.log(cities);



    		async function getWeather() {

			const now = new Date();
			const utcTime = now.toISOString(); // This provides the time in ISO 8601 format which is in UTC

			console.log(utcTime);
			console.log("Hours: ", now.getUTCHours());
			
			const utcHours = now.getUTCHours();

			const TKYO_TimeZoneOffSet = 9; //Tokyo Japan UTC+9

			let TKYO_Hours = utcHours + TKYO_TimeZoneOffSet;

			// Handle overflow to ensure hours stay within 0-23 range
			
			if(TKYO_Hours >=24){
				TKYO_Hours -=24; //Adjust for positive overflow
			}

			console.log("Tokyo Hours: ", TKYO_Hours);




			const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m&temperature_unit=fahrenheit');
		
			const data = await response.json();
			
			const weatherElement = document.getElementById('weather');
			const temperature = data.hourly.temperature_2m[TKYO_Hours];


			weatherElement.innerHTML = `<h4>Tokyo, Japan Temperature: ${temperature}°F</h4>`; 

	}
