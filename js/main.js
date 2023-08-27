const key = 'e19949b2f5bbf124c9efaf5b77b31e6e';
let city = 'londres';


let url = `https://api.openweathermap.org/data/2.5/weather?q={${city}}&appid={${key}`;

fetch (url)
.then((response) => response.json())
.then((data) => console.log(data));
