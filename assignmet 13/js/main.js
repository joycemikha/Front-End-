//document.getElementById('cityForm').addEventListener('submit', function(event) {
    
    function test(){

    var city = document.getElementById('city').value;
    event.preventDefault();
    const apiKey = '7bd4e6f0667e40be8bb11638242606';
    const apiUrl = `http://api.weatherapi.com/v1/marine.json?key=${apiKey}&q=${city}&days=3`;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
   day22=weekday[d.getDay()+1];
   day33=weekday[d.getDay()+2];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const m = new Date();
    let month2 = month[d.getMonth()];
    const dd = new Date();
    let day2 = d.getDate();
    let dm=day2+month2

    fetch(apiUrl)
        .then(response => response.json())
        
        .then(data => {
            const forecast = data.forecast;
            const location = data.location;
            
            document.getElementById('weatherResult').innerHTML = `
            <div class="card ">
            <div class="card-header d-flex justify-content-between">
            ${day}
            <span class="">${dm}</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">${location.name}</h5>
              <p class="card-text number fw-bolder">${forecast.forecastday[0].day.avgtemp_c}°C</p>
              <div>
                <img src="https:${forecast.forecastday[0].day.condition.icon}" alt="weather" width="90">
            </div>
            <div class="text-primary my-3">${forecast.forecastday[0].day.condition.text}</div>
            <span class="me-3"><img src="imgs/icon-umberella.png" alt="umberella">${forecast.forecastday[0].day.avghumidity}%</span>
            <span class="me-3"><img src="imgs/icon-wind.png" alt="wind">${forecast.forecastday[0].day.maxwind_kph} kph </span>
            <span><img src="imgs/icon-compass.png" alt="compass">${forecast.forecastday[0].hour[0].wind_dir}</span>
            </div>
          </div>
          <div class="card">
          <div class="card-header sec">
          ${day22}
          </div>
          <div class="card-body seco text-center">
            <img src="https:${forecast.forecastday[1].day.condition.icon}" alt="sun" width="48" class="m-3">
            <p class="card-text fs-3 fw-bolder mb-0">${forecast.forecastday[1].day.maxtemp_c}</p>
            <small class="">${forecast.forecastday[1].day.mintemp_c}</small>
            <div class="text-primary my-5">${forecast.forecastday[1].day.condition.text}</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
          ${day33}
          </div>
          <div class="card-body  text-center">
          <img src="https:${forecast.forecastday[2].day.condition.icon}" alt="sun" width="48" class="m-3">
          <p class="card-text fs-3 fw-bolder mb-0">${forecast.forecastday[2].day.maxtemp_c}</p>
          <small class="">${forecast.forecastday[2].day.mintemp_c}</small>
          <div class="text-primary my-5">${forecast.forecastday[2].day.condition.text}</div>
          </div>
        </div>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<div class="alert alert-danger">Error fetching weather data. Please try again.</div>`;
        });
};
