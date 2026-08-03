// Coordenadas del centro
const centro = [-34.83129799562688, -56.17469889591736];

// Crear mapa
const map = L.map("map").setView(
    [-34.83129799562688, -56.17469889591736],
    13
);

// Agregar mapa base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Marcador del centro
L.marker(centro)
    .addTo(map)
    .bindPopup("<b>Centro del mapa</b><br>-34.83129799562688, -56.17469889591736")
    .openPopup();

// ===============================
// RADIO 1 KM (VERDE)
// ===============================

const radio1 = L.circle(centro, {
    radius: 1000,
    color: "#00A651",
    weight: 2,
    fillColor: "#00ff668c",
    fillOpacity: 0.30
}).addTo(map);

// ===============================
// RADIO 2 KM (AMARILLO)
// ===============================

L.circle(centro, {
    radius: 2000,
    color: "#FFC107",
    weight: 2,
    fillColor: "#fffc43",
    fillOpacity: 0.22
}).addTo(map);

// ===============================
// RADIO 3 KM (ROJO)
// ===============================

L.circle(centro, {
    radius: 3000,
    color: "#E53935",
    weight: 2,
    fillColor: "#FF5252",
    fillOpacity: 0.18
}).addTo(map);

// Ajustar el zoom para que se vea completo el radio de 3 km
map.fitBounds(radio1.getBounds().pad(2));