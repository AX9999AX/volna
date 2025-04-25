'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const customIcon = new L.Icon({
    iconUrl: '/icon/logo.svg',
    iconSize: [32, 48],
    iconAnchor: [16, 48],
    popupAnchor: [0, -48],
})

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
                <Marker
                    position={position}
                    icon={customIcon}>
                    <Popup>вул. Квіткова, 21-А</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default LocationMap
