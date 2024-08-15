
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

document.addEventListener('DOMContentLoaded', () => {
	const doggButton = document.getElementById('dogButton');
	const fetchDogFacts = () => {
	  const apiUrl = 'https://dogapi.dog/api/v2/facts';
	  fetch(apiUrl)
		.then(response => {
		  if (!response.ok) {
			throw new Error('error');
		  }
		  return response.json();
		})
		.then(data => {
		  console.log(data);
		  if (data.data && data.data.length > 0 && data.data[0].attributes && data.data[0].attributes.body) {
			const dogResult = data.data[0].attributes.body;
			const factEl = document.getElementById('dog-facts');
			if (factEl) {
			  factEl.textContent = dogResult;
			}
		  }
		})
	};
	if (doggButton) {
	  doggButton.addEventListener('click', () => {
		fetchDogFacts();
	  });
	  fetchDogFacts();
	}
  });



	
const cities = [
//Stores geo-location data for cities
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

const HourlyTimeForcast = [
//Stores hourly data for weather api
	{
		Hour: 0,
		Time: 'CurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 1,
		Time: 'OneHourFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 2,
		Time: '2HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 3,
		Time: '3HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 4,
		Time: '4HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{	
		Hour: 5,
		Time: '5HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 6,
		Time: '6HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{	
		Hour: 7,
		Time: '7HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{	
		Hour: 8,
		Time: '8HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 9,
		Time: '9HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{  
		Hour: 10,
		Time: '10HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{	
		Hour: 11,
		Time: '11HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 12,
		Time: '12HoursFromCurrentTime',
		Temperature: -1, 
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 13,
		Time: '13HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 14,
		Time: '14HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 15,
		Time: '15HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 16,
		Time: '16HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 17,
		Time: '17HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 18,
		Time: '18HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 19,
		Time: '19HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 20,
		Time: '20HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 21,
		Time: '21HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 22,
		Time: '22HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	},
	{
		Hour: 23,
		Time: '23HoursFromCurrentTime',
		Temperature: -1,
		Humidity: -1,
		Precipitation: -1
	}
]
const DailyTimeForcast = [
//Stores daily data for weather api

	{
		Day: 0,
		Time: 'CurrentTime',
		TemperatureMax: -1,
		TemperatureMin: -1
	},
	{
		Day: 1,
		Time: 'OneDayFromCurrentTime',
		TemperatureMax: -1,
		TemperatureMin: -1
	},
	{
		Day: 2,
		Time: '2DaysFromCurrentTime',
		TemperatureMax: -1,
		TemperatureMin: -1
	},
	{
		Day: 3,
		Time: '3DaysFromCurrentTime',
		TemperatureMax: -1,
		TemperatureMin: -1
	},
	{
		Day: 4,
		Time: '4DaysFromCurrentTime',
		TemperatureMax: -1,
		TemperatureMin: -1
	},
	{	
		Day: 5,
		Time: '5DaysFromCurrentTime',
		TemperatureMax: -1,
		TemperatureMin: -1
	},
	{
		Day: 6,
		Time: '6DaysFromCurrentTime',
		TemperatureMax: -1,
		TemperatureMin: -1
	}
]

	console.log(cities);

	let CityArrayIndex = -1;

		document.addEventListener('DOMContentLoaded', ()=>{
		
		//Takes User selection and assigns relevant city location data

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


			const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,rain_sum&temperature_unit=fahrenheit&precipitation_unit=inch`);
			console.log(response);	
			const data = await response.json();
			
			const weatherElement = document.getElementById('weather');
			const HourlyWeatherElement = document.getElementById('Hourly');
			const DailyWeatherElement = document.getElementById('Daily');
		

			// Clear previous content in HourlyWeatherElement and Daily Weather Element
			HourlyWeatherElement.innerHTML = '';
			DailyWeatherElement.innerHTML = '';

			for (let i = 0; i < HourlyTimeForcast.length; i++){
				HourlyTimeForcast[i].Hour = SelectedCity_Hours +i; //Update the hour and property and Temperature
				HourlyTimeForcast[i].Temperature = data.hourly.temperature_2m[HourlyTimeForcast[i].Hour];
				HourlyTimeForcast[i].Time = HourlyTimeForcast[i].Hour 
				HourlyTimeForcast[i].Humidity = data.hourly.relative_humidity_2m[HourlyTimeForcast[i].Hour];

				if(HourlyTimeForcast[i].Time >=24){
					HourlyTimeForcast[i].Time -=24; //Adjust for positive overflow
				}


				let header = document.createElement('h2'); //Create a new header element

				header.textContent = `Hour ${HourlyTimeForcast[i].Time}: ${HourlyTimeForcast[i].Temperature}°F Humidity: ${HourlyTimeForcast[i].Humidity}%`; //Set the content of the header to the temperature or other information
				// Append the header to the HourlyWeatherElement
				HourlyWeatherElement.appendChild(header);



			}

			for (let i = 0; i < DailyTimeForcast.length; i++){
				         if (i < data.daily.temperature_2m_max.length && i < data.daily.temperature_2m_min.length) {
         				     	  DailyTimeForcast[i].TemperatureMax = data.daily.temperature_2m_max[i];
            				          DailyTimeForcast[i].TemperatureMin = data.daily.temperature_2m_min[i];
               				          DailyTimeForcast[i].Day = i; 

              					  let header2 = document.createElement('h2');
               					 header2.textContent = `Day ${DailyTimeForcast[i].Day}: Max ${DailyTimeForcast[i].TemperatureMax}°F, Min ${DailyTimeForcast[i].TemperatureMin}°F`;
             				         DailyWeatherElement.appendChild(header2);
           				} else {
               					 console.warn(`Daily data not available for index ${i}`);
           				 }

			}


			weatherElement.innerHTML = `<h4>${cities[CityArrayIndex].name}, UnitedStates </h4>`;

			
			

         }

		 const modal = document.getElementById("myModal");

		 const span = document.getElementsByClassName("close")[0];
			 
		 window.onload = function() {
			 modal.style.display = "block";
		 };
			 
		 span.onclick = function() {
			 modal.style.display = "none";
		 };
			 
		 window.onclick = function(event) {
			 if (event.target == modal) {
			 modal.style.display = "none";
		 }};


		 const submitBreedButton = document.getElementById('submitBreedButton');
		 const dogBreedInput = document.getElementById('dogBreedInput');
		 const favoriteBreedDisplay = document.getElementById('favoriteBreedDisplay');
	 
		 submitBreedButton.addEventListener('click', () => {
			 const favoriteBreed = dogBreedInput.value.trim();
			 if (favoriteBreed) {
				 favoriteBreedDisplay.textContent = `An excellent choice: ${favoriteBreed}`;
			 } else {
				 favoriteBreedDisplay.textContent = 'Please enter a dog breed.';
			 }
		 });
