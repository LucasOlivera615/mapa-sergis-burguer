// Coordenadas del centro
const centro = [-34.83129799562688, -56.17469889591736];

// Crear mapa
const map = L.map("map").setView(
    [-34.83129799562688, -56.17469889591736],
    13
)

const iconoCentro = L.icon({
    iconUrl: "assets/744916567_18160015663427519_714214093270430646_n-removebg-preview.webp",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -30]
})

// Agregar mapa base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map)

// Marcador del centro
L.marker(centro, {
    icon: iconoCentro
})
    .addTo(map)
    .bindPopup("<b>Centro del mapa</b><br>-34.83129799562688, -56.17469889591736")
    .openPopup()

    
// ===============================
// RADIO 0.5 KM (VERDE)
// ===============================

const radio1 = L.circle(centro, {
    radius: 500,
    color: "#07ca00",
    weight: 2,
    fillColor: "#00ff668c",
    fillOpacity: 0.30
}).addTo(map)

// ===============================
// RADIO 1 KM (VERDE)
// ===============================

L.circle(centro, {
    radius: 1000,
    color: "#00A651",
    weight: 2,
    fillColor: "#00ff668c",
    fillOpacity: 0.30
}).addTo(map)

// ===============================
// RADIO 2 KM (AMARILLO)
// ===============================

L.circle(centro, {
    radius: 2000,
    color: "#fffb07",
    weight: 2,
    fillColor: "#fffc43",
    fillOpacity: 0.22
}).addTo(map)

// ===============================
// RADIO 3 KM (NARANJA)
// ===============================

L.circle(centro, {
    radius: 3000,
    color: "#f7980b",
    weight: 2,
    fillColor: "#ff9752",
    fillOpacity: 0.18
}).addTo(map)

// ===============================
// RADIO 4 KM (ROJO)
// ===============================

L.circle(centro, {
    radius: 5000,
    color: "#E53935",
    weight: 2,
    fillColor: "#FF5252",
    fillOpacity: 0.14
}).addTo(map)


// Ajustar el zoom para que se vea completo el radio de 3 km
map.fitBounds(radio1.getBounds().pad(2))