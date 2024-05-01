// Leaflet OpenStreetMap
var mapid = L.map('mapid').setView([3.1573491, 101.7114804], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapid);

var marker = L.marker([3.1573491, 101.7114804]).addTo(mapid);
marker.bindPopup("<b>你好<br>Hello</b><br>Address").openPopup();
