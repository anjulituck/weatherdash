// VARIABLES
var search = document.getElementById("search-bar");
var cityHistory = JSON.parse(localStorage.getItem('cityHistory'));
var searched = JSON.parse(localStorage.getItem('city-search'));
var citySearch = document.getElementById('city-search')
var cityForm = document.getElementById('city-form')
var searchBtn = document.getElementById('search-btn')
var todayForcast= document.getElementById('today-forcast')
var newDate= document.getElementById('date')
var temp= document.getElementById('temp')
var wind= document.getElementById('wind')
var humidity= document.getElementById('humidity')
var uv= document.getElementById('uv')
// var dateC= document.getElementById('current-date')
// var tempC= document.getElementById('current-temp')
// var windC= document.getElementById('current-wind')
// var humidityC= document.getElementById('current-humidity')
var fiveForcast= document.getElementById('five-day-forcast')
var tc1=document.getElementById('tc-1')
var tc2=document.getElementById('tc-2')
var tc3=document.getElementById('tc-3')
var tc4=document.getElementById('tc-4')
var tc5=document.getElementById('tc-5')
var tc6=document.getElementById('tc-6')
var tc7=document.getElementById('tc-7')
var tc8=document.getElementById('tc-8')
var tc9=document.getElementById('tc-9')
var apiKey="9d57d03f4c586cee8cb55befc5b9b94a";
var kelvin = 273;


var formSubmitHandler = function(event){
  event.preventDefault();
      var city= citySearch.value;
      console.log(city)
      var cityList=[];
      cityList.push(city);
      var userHistory = JSON.stringify((cityList).splice(','));
      localStorage.setItem('city', userHistory); 
      var searched = JSON.parse(localStorage.getItem('city'));
      var storedCities = searched;
      var cityListBtn = document.createElement("button");
      cityListBtn.classList = "btn btn-success my-2 mx-1 w-100 text-white";
      search.appendChild(cityListBtn);
      cityListBtn.innerHTML = storedCities
      cityListBtn.onclick = function(){
          // console.log("Clicked!");
          const newCity = storedCities;
          getWeather(newCity);
          getForecast(newCity);
          };
          if (newCity) {
              getWeather(newCity);
              getForecast(newCity);
              citySearch.value= "";
          } else {
              alert("Please Enter A City");
  }
};

searchBtn.addEventListener('submit', formSubmitHandler)

var getWeather = function(city) {
  
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ apiKey;

  // USING MODULE EXAMPLE
  fetch(apiUrl)
  .then((response) => {
      return response.json();
    })
  .then((data) => {
      console.log(data);

      var d = new Date(data.dt * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = d.getFullYear();
      var month = months[d.getMonth()];
      var date = d.getDate();
      var time = date + ' ' + month + ' ' + year + ' ' ;
      newDate.textContent = time;
      // dateC.textContent = time;

      // cityName.textContent = data.name; - maybe need to declare as a variable 
      temp.textContent =  "Temperature: " + Math.floor((data.main.temp - kelvin)* 1.8 + 32) + "°F";
      wind.textContent = "Wind: " + data.wind.speed + " mph";
      humidity.textContent = "Humidity: " + data.main.humidity + "%";
      var lat = data.coord.lat; 
      var lon = data.coord.lon;
      console.log(lat);
      console.log(lon);
      getUV(lat, lon);
     });  
  };
        
var getUV = function(lat, lon) {
  var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

    fetch(uvUrl)
    .then((response) => {
        return response.json();
      })
    .then((data) => {
        console.log(data);
        const uv = data.current.uvi;
        uv.textContent = "UVI: " + uv;
        // not working
        // if ( uv > 5) {
        //   uv.classList.add("red-uvi");
        // }
        // if (uv < 5) {
        //   uv.classList.add("green-uvi");
        // }
    })
};

var getForecast = function(city) {
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
  fetch(forecastUrl)
    .then((response) => {
    return response.json();
    })
      .then((data) => {
        // fiveForecast.textContent = "";
        for (var i=5; i < 40; i+=8) {
          console.log(data.list[i]);

          var forecastContainer = document.createElement("div");
          forecastContainer.classList = "card text-dark my-5";
          
          // NEED TO CREATE ELEMENT FOR DATE
          // var date =new Date(data.list[i].dt_txt).toLocaleDateString()
          // console.log(date);
          // date.classList = "card-text text-dark";
          // date.textContent = date;
          // date.appendChild(forecastContainer);

          var cityName = document.createElement("h5");
          cityName.classList = "card-text text-dark";
          cityName.textContent = data.name;
          cityName.appendChild(forecastContainer);

          var fTemp = document.createElement("h5");
          fTemp.classList = "card-text text-dark";
          fTemp.textContent = "Temperature: " + Math.floor((data.list[i].main.temp - kelvin) * 1.80 + 32) + "°F";
          forecastContainer.appendChild(fTemp);
      
          var wind = document.createElement("h5");
          wind.classList = "card-text text-dark";
          wind.textContent = "Wind: " + data.list[i].wind.speed + " mph";
          forecastContainer.appendChild(wind);

          var humidity = document.createElement("h5");
          humidity.classList = "card-text text-dark";
          humidity.textContent = "Humidity: " + data.list[i].main.humidity;
          forecastContainer.appendChild(humidity);
          
          fiveForcast.appendChild(forecastContainer);
          console.log(fiveforecast)
        }  
    })
};


var topCityBtn = function(event) {
  var data = event.target.getAttribute("id");
  if (data == 'tc-1') {
    const city = 'austin';
    getWeather(city);
    getForecast(city);
  }
  if (data == 'tc-2') {
    const city = 'houston';
    getWeather(city);
    getForecast(city);
  }
  if (data == 'tc-3') {
    const city = 'chicago';
    getWeather(city);
    getForecast(city);
  }
  if (data == 'tc-4') {
    const city = 'new york';
    getWeather(city);
    getForecast(city);
  }   
  if (data == 'tc-5') {
  const city = 'orlando';
  getWeather(city);
  getForecast(city);
  }
  if (data == 'tc-6') {
    const city = 'san francisco';
    getWeather(city);
    getForecast(city);
  }  
  if (data == 'tc-7') {
    const city = 'seattle';
    getWeather(city);
    getForecast(city);
  } 
  if (data == 'tc-8') {
    const city = 'denver';
    getWeather(city);
    getForecast(city);
  } 
  if (data == 'tc-9') {

    const city = 'altanta';
    getWeather(city);
    getForecast(city);
  } 
      
} 

tc1.addEventListener("click", topCityBtn);
tc2.addEventListener("click", topCityBtn);
tc3.addEventListener("click", topCityBtn);
tc4.addEventListener("click", topCityBtn);
tc5.addEventListener("click", topCityBtn);
tc6.addEventListener("click", topCityBtn);
tc7.addEventListener("click", topCityBtn);
tc8.addEventListener("click", topCityBtn);
tc9.addEventListener("click", topCityBtn);

