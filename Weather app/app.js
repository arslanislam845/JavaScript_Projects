var input=document.querySelector("#city-name")
var city_display=document.querySelector("#city")
var temp=document.querySelector("#temp")
var clouds=document.querySelector("#clouds")
var button=document.querySelector("#submit")
var desc=document.querySelector("#desc")
var temp_value=document.querySelector("#temp_min")
button.addEventListener("click", function(name){
   
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+
    input.value+
    "&units=metric&appid=50a7aa80fa492fa92e874d23ad061374")

    .then((Response)=>Response.json())
    .then((data)=>{
        console.log(data)
        var tempValue = data.main.temp
        var temp_maxValue = data.main.temp_max
        var temp_minValue = data.main.temp_min
        var nameValue = data.name;
        var WindValue = data.wind.speed;
        var humidityValue = data.main.humidity;
        var descValue = data["weather"][0]["description"];
        var cloudsValue = data.clouds.all;
        var country_name = data.sys.country;

        city_display.innerHTML=country_name+" , "+nameValue
        temp.innerHTML=`Temperature - ${tempValue} °C , Winds - ${WindValue} km/h`
       clouds.innerHTML="Clouds - "+ cloudsValue + " , " +" Humidity "+humidityValue + "%"
       desc.innerHTML="Discription - "+descValue
       temp_value.innerHTML=`Minimum-Temperature - ${temp_minValue} °C , Maximum-Temperature - ${temp_maxValue} °C`
    })
    .catch((err) => alert("Wrong city name!"));

})