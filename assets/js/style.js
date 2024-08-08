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
