"use strict";
// DEFAULT WEBPAGE SET FOR SATX

mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    zoom: 10, // starting zoom
    center: [-98.4936, 29.4241] // [lng, lat]

});
// GEOCODE AND MARKER
let markerDefault = new mapboxgl.Marker({
    draggable: true
})
markerDefault.setLngLat([-98.4936, 29.4241]);
markerDefault.addTo(map);

// DATA FOR DEFAULT WEBPAGE
const city = 'San Antonio, TX, US';
const units = 'imperial';
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WM_KEY}&units=${units}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let children = document.querySelector("#weather-data").children

        for (let i = 0; i < data.list.length; i += 8) {

            for (let i = 0; i < children.length; i++) {
                children[i].children[1].children[0].innerText = new Date(data.list[i * 8].dt * 1000).toDateString();
                children[i].children[1].children[1].innerText = `Description: ${data.list[i * 8].weather[0].description}`;
                children[i].children[1].children[2].innerText = `Feels Like: ${data.list[i * 8].main.feels_like}`;
                children[i].children[1].children[3].innerText = `Humidity: ${data.list[i * 8].main.humidity}`;
                children[i].children[1].children[4].innerText = `Wind: ${data.list[i * 8].wind.speed} MPH`;
                children[i].children[1].children[5].innerText = `Pressure: ${data.list[i * 8].main.pressure}`;
                children[i].children[0].src = `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
            }
        }


    })
    .catch((e) => {
        console.error(e);
    });
// DEFUALT WEBPAGE ENDS HERE

// Search Event
document.querySelector("#location-input").addEventListener("submit", (e) => {
    e.preventDefault();
    let city = document.querySelector("#city-input").value
    let state = document.querySelector("#state-input").value.toUpperCase()
    let country = document.querySelector("#country-input").value.toUpperCase()
    console.log(city);
    console.log(state);
    console.log(country);
    const searchLocation = `${city}, ${state}, ${country}`;
    const units = 'imperial';
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${WM_KEY}&units=${units}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            map.flyTo({
                center: [data.city.coord.lon, data.city.coord.lat]
            })
            let parent = document.querySelector("#weather-data")
            let children = document.querySelector("#weather-data").children
            for (let i = 0; i < data.list.length; i += 8) {
                // let dateTime = new Date(data.list[i].dt * 1000).toDateString()
                // console.log(dateTime);

                for (let i = 0; i < children.length; i++) {
                    children[i].children[1].children[0].innerText = new Date(data.list[i * 8].dt * 1000).toDateString();
                    children[i].children[1].children[1].innerText = `Description: ${data.list[i * 8].weather[0].description}`;
                    children[i].children[1].children[2].innerText = `Feels Like: ${data.list[i * 8].main.feels_like}`;
                    children[i].children[1].children[3].innerText = `Humidity: ${data.list[i * 8].main.humidity}`;
                    children[i].children[1].children[4].innerText = `Wind: ${data.list[i * 8].wind.speed} MPH`;
                    children[i].children[1].children[5].innerText = `Pressure: ${data.list[i * 8].main.pressure}`;
                    children[i].children[0].src = `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
                }
            }
            // change location text in top right of page
            document.querySelector("#current-city").innerText = `Current City: ${city}, ${state}`
            // reset marker
            let lon = data.city.coord.lon;
            let lat = data.city.coord.lat
            markerDefault.setLngLat ([lon, lat]);
            markerDefault.addTo(map);

        })
        .catch((e) => {
            console.error(e);
        });
});


// DRAG SEARCH
function onDragEnd() {
    const lngLat = markerDefault.getLngLat();
    fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={${${lngLat.lat}}}&lon={${lngLat.lng}}&appid={API key}")
    // coordinates.style.display = 'block';
    // coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

markerDefault.on('dragend', onDragEnd);