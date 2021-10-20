var mymap = L.map('mapid').setView([27.7172, 85.3240], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Frc2hhbTAxMCIsImEiOiJja3V3aWt5a3owZ2ZuMzBtcmU0eG9tYjJnIn0.bqPFNAyhnjTyuOL0d8Scmg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2Frc2hhbTAxMCIsImEiOiJja3V3aWt5a3owZ2ZuMzBtcmU0eG9tYjJnIn0.bqPFNAyhnjTyuOL0d8Scmg'
}).addTo(mymap);

var marker = L.marker([27.7172, 85.3240]).addTo(mymap);