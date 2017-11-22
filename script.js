var x = document.getElementById("weather");
var temp = document.getElementById("temp");
var scale = 'C';
var temperature= 0;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showWeather(position) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon="+position.coords.longitude,function(a){
      temperature  = a.main.temp;
      x.innerHTML = "<img src='" + a.weather[0].icon + "'></img>" +"<h3><strong>Weather</strong></h3><p>"+ a.weather[0].main +"</p>"+"<h3><strong>Temperature</strong>";
      temp.innerHTML =  temperature + " °" + scale;
    });
}

  function changeTemp(){
    switch(scale){
      case 'F':
        scale = 'C';
        temperature = (temperature -32) * (5/9);
        break;
      case 'C':
        scale = 'F';
        temperature = (temperature * 1.8) + 32;
        break;
                }
    temp.innerHTML =  temperature + " °" + scale;
  }