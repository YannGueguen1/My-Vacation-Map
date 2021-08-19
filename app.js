mapboxgl.accessToken = 'pk.eyJ1IjoieWFubmd1ZWd1ZW4iLCJhIjoiY2tzZ3JwZDhyMW5nYTMwb21peGYzMzR6eiJ9.Q4dRQr58ib-_kYIQ5AhaPg';

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy : true})

// function successLocation(position){
//     // setupMap([-41.87, 87.62])
//     console.log(position)
//     setupMap([position.coords.longitude+3, position.coords.latitude])
// }

// function errorLocation(){
//     setupMap([-41.87, 87.62])
// }

// function setupMap(center){
//     const map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center:center,
//         zoom: 15,
//     });

//     const nav = new mapboxgl.NavigationControl();
//     map.addControl(nav);
// }

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-87.62, 41.87],
    zoom: 15,
    attributionControl: false
});
   
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

