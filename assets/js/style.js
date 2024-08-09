// Define the API URL
const apiUrl = 'https://dogapi.dog/api/v2/facts';

const weatherMan = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

// Make a GET request
const result = fetch(weatherMan)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const weather = data;
    const result = weather.current.temperature_2m;
    // grab the HTML element
    const weatherEl = document.querySelector("#weather-result");

    // Display the data
    weatherEl.textContent = result;
  })
  .catch(error => {
    console.error('Error:', error);
});

const dogFact = fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const facts = data;
    const dogResult = facts.data[0].attributes.body;
    // grab the HTML element
    const factEl = document.querySelector("#dog-facts");

    // Display the data
    factEl.textContent = dogResult;
  })
 // .catch(error => {
   // console.error('Error:', error);
 // });



	//Weather Function Uses Tokyo Japan as a placeholder
        //Line 32 gets time in UTC from users computer
const cities = [

	{
		name: 'NewYork',
		latitude: 40.7128,
		longitude: -74.0060,
		timeZoneOffset: -4
	},
	{
		name: 'LosAngeles',
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
		name: 'Chicago',
		latitude: 41.8781,
		longitude: -87.698,
		timeZoneOffset: -5
	}
]


	console.log(cities);

	let CityArrayIndex = -1;

		document.addEventListener('DOMContentLoaded', ()=>{
		

		const citySelect = document.getElementById('city');
		
		const selectedCityParagraph = document.getElementById('selectedCity');

		
		citySelect.addEventListener('change', () => {

		const selectedCity = citySelect.value;

	
		for (let i = 0; i < cities.length; i++){

			if (selectedCity == cities[i].name){
				CityArrayIndex = i;
				console.log("ArrayIndex: ", CityArrayIndex);
				break;//Exit the loop when the cites array name equals the selected city box
			}

		}

				
		
		selectedCityParagraph.textContent = `You selected: ${selectedCity}`;

		getWeather();
		});
	
		});



    		async function getWeather() {

			const now = new Date();
			const utcTime = now.toISOString(); // This provides the time in ISO 8601 format which is in UTC

			console.log(utcTime);
			console.log("Hours: ", now.getUTCHours());
			
			const utcHours = now.getUTCHours();

			const TimeZoneOffSet = cities[CityArrayIndex].timeZoneOffset; // Gets Time zone from Cities Array
			
			const LATITUDE = cities[CityArrayIndex].latitude; // Gets Latitude from Cities Array

			const LONGITUDE = cities[CityArrayIndex].longitude; // Gets Longitude from cities Array

			let SelectedCity_Hours = utcHours + TimeZoneOffSet; // Corrects Time zone offest

			// Handle overflow to ensure hours stay within 0-23 range
			
			if(SelectedCity_Hours >=24){
				SelectedCity_Hours -=24; //Adjust for positive overflow
			}
			if(SelectedCity_Hours < 0){
				SelectedCity_Hours +=24; //Adjust for negative overflow
			}	

			console.log("Seleted City Hours: ", SelectedCity_Hours);




			const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m&temperature_unit=fahrenheit`);
			console.log(response);	
			const data = await response.json();
			
			const weatherElement = document.getElementById('weather');
			const temperature = data.hourly.temperature_2m[SelectedCity_Hours];


			weatherElement.innerHTML = `<h4>${cities[CityArrayIndex].name}, UnitedStates: ${temperature}°F</h4>`; 


	}

	};

