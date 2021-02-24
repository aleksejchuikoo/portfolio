import React from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import markerImg from "../../assets/img/marker.png";

import "./ContactMap.scss";

function ContactMap() {
  const [popup, setPopup] = React.useState(true);

  const myIcon = L.icon({
    iconUrl: markerImg,
    iconSize: [41, 41],
  });

  const position = [53.8915904, 27.5207197];
  return (
    <Map center={position} maxZoom={16} zoom={6} className="map">
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />

      <Marker
        position={position}
        icon={myIcon}
        onClick={() => setPopup(!popup)}
      />
      {popup && (
        <Popup position={position} onClose={() => setPopup(false)}>
          <div>
            Aleksej Chuiko, <br />
            97, Rozy Lyuksemburg <br />
            Minsk, 220036 <br />
            Belarus
          </div>
          <div className="map-email">
            <span>@</span>aleksej.chuyko@gmail.com
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default ContactMap;
