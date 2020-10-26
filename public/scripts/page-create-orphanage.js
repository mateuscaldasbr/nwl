//Create map

const map = L.map("mapid").setView([-3.1442911,-58.4300785], 14 );

// Create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/*, {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}*/).addTo(map);

//Create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;



//Create and add Marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)

})

/*L.marker([-3.1442911, -58.4300785], { icon })
    .addTo(map)*/