// VARIABLES
var search = document.getElementById("search-bar");
var cityHistory = JSON.parse(localStorage.getItem('cityHistory'));
var searched = JSON.parse(localStorage.getItem('city-search'));
var citySearch = document.getElementById('city-search')
var cityForm = document.getElementById('city-form')
var searchBtn = document.getElementById('search-btn')
var todayForcast= document.getElementById('today-forcast')
var date= document.getElementById('date')
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


