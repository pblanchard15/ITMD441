{
    "region": "Chicago, IL",
    "currentConditions": {
    "dayhour": "Friday 7:00 PM",
    "temp": {
    "f": 27
    },
    "precip": "10%",
    "humidity": "30%",
    "wind": {
    "mile": 18
    },
    "iconURL": "https://th.bing.com/th/id/R.146cb8a155e50ceffe11c9deb978317c?rik=CJiZ%2b4tJETewxQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f09%2fsymbol-weather-windy-clip-art_285983.png&ehk=nYh7AzIlwK9SVpDYw0IgwTy0hMQn2cRZ8eMDvVO6BHY%3d&risl=&pid=ImgRaw&r=0",
    "comment": "Windy"
    }
}
fetchWeather: function() {
    fetch("https://weatherdbi.herokuapp.com/data/weather/london")
    .then(res=>res.json())
    .then(json=>console.log(json)))
}