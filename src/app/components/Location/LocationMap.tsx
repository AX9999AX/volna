'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
})

// const customIcon = new L.Icon({
//     iconUrl: '/logo.svg',
//     iconSize: [32, 48],
//     iconAnchor: [16, 48],
//     popupAnchor: [0, -48],
// })

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const LocationMap = () => {
    const position: [number, number] = [50.4501, 30.5234]

    return (
        <div className='w-full h-full rounded-2xl overflow-hidden'>
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '100%' }}>
                <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png' />
                <Marker position={position}>
                    <Popup>вул. Квіткова, 21-А</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default LocationMap
