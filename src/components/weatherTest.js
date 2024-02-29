const apiKey = "d4c5c50259c1da6dee8012189967991e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Agra"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data)
}

checkWeather()