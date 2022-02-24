const nameCity = document.querySelector('.city_name h3 span')
const searchIcon = document.querySelector('.search button svg')
const searchIp = document.querySelector('.search input')
const weather = {
    'keyAPI':'bd70aabf42690955676655707c89c1a1',
    fetchWeather(city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city 
            + '&appid='
            + this.keyAPI
        ).then((response) => response.json())
        .then( (data) =>  this.displayFunction(data))
    },

    displayFunction(data){
        const { name } = data
        const { icon, description} = data.weather[0]
        const {temp, humidity} = data.main
        const { visibility} = data
        const { speed} = data.wind
        const deg = Math.floor(temp - 273.15)
            document.querySelector('.city_name div').innerHTML = `<h1>
            ${deg}
                <sup>o</sup>
            C
                </h1>`
            nameCity.innerText = name;
            document.querySelector('.humidity span').innerText = humidity
            document.querySelector('.speed span').innerText = speed
            document.querySelector('.state p').innerText = description

        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?' + name + '")'
    }
    
}
// weather.fetchWeather('Korea')
function weatherPlace(){
    const City = searchIp.value
    weather.fetchWeather(City)
    searchIp.value = ''
    searchIp.focus()
}
console.log(weather.displayFunction);
searchIcon.onclick = weatherPlace
document.addEventListener('keydown',e =>{
    if(e.key == 'Enter'){
        weatherPlace()
    }
})