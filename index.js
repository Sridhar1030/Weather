const apiKey="8308d5b36cc25da65129b761659080e8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


var weatherIcon = document.querySelector(".weather-icon");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city)
{
    var response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
else{
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/drizzle.png"
        document.querySelector(".report").textContent=data.weather[0].main

    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/clear.png"
        document.querySelector(".report").textContent=data.weather[0].main

    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
        document.querySelector(".report").textContent=data.weather[0].main
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/drizzle.png"
        document.querySelector(".report").textContent=data.weather[0].main

    }
    else if(data.weather[0].main =="Wind"){
        weatherIcon.src = "images/wind.png"
        document.querySelector(".report").textContent=data.weather[0].main

    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "images/snow.png"
        document.querySelector(".report").textContent=data.weather[0].main

    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png"
        document.querySelector(".report").textContent=data.weather[0].main

    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

}
   
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keypress",(event)=>{
   if(event.key=="Enter"){
    checkWeather(searchBox.value);
   }
})