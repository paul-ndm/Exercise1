import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const IpMap = ({lat, lng}) => {
    return(
      <MapContainer className = "isMap" center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, lng]}>
      <Popup>
        you are here <br /> 
      </Popup>
    </Marker>
      </MapContainer>
    )
  }

  export default IpMap