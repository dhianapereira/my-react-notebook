const map = L.map("map-id").setView([-9.7969489, -36.684837], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/styles/img/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, lat, lng, name }) {
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/page_orphanage?id=${id}"> <img src="/styles/img/arrow-white.svg"> </a>`
  );

  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");

orphanagesSpan.forEach((element) => {
  const orphanage = {
    id: element.dataset.id,
    lat: element.dataset.lat,
    lng: element.dataset.lng,
    name: element.dataset.name,
  };

  addMarker(orphanage);
});
