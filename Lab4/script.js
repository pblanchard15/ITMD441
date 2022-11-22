
    const submit = document.getElementById('submit');
submit.addEventListener('click', getLocation.bind(this, 'search'));
function getLocation(search) {    
const city=document.getElementById(search).value).toLowerCase();    getSearch(Region); 
} 
fetchWeather: function() {
    fetch("https://weatherdbi.herokuapp.com/data/weather/london")
    .then(res=>res.json())
    .then(json=>console.log(json)))
}