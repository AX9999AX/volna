'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { useEffect } from 'react'

const customIcon = L.divIcon({
    className: 'scalable-icon',
    html: `<img src="/icon/icon-marker.svg" style="width: 64px; height: 96px;" />`,
    iconSize: [64, 96],
    iconAnchor: [32, 96],
})

const ZoomScaler = () => {
    const map = useMap()

    useEffect(() => {
        const updateScale = () => {
            const zoom = map.getZoom()
            const scale = Math.pow(0.9, 14 - zoom)
            const iconElement = document.querySelector('.scalable-icon img') as HTMLElement
            if (iconElement) {
                iconElement.style.transform = `scale(${scale})`
                iconElement.style.transformOrigin = 'bottom center'
            }
        }

        updateScale()
        map.on('zoom', updateScale)
        return () => {
            map.off('zoom', updateScale)
        }
    }, [map])

    return null
}

const LocationMap = () => {
    const position: [number, number] = [50.3401905, 30.6180144]

    return (
        <div className='w-full h-full rounded-2xl overflow-hidden'>
            <MapContainer
                center={position}
                zoom={14}
                scrollWheelZoom={true}
                style={{ width: '100%', height: '100%' }}>
                <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png' />
                <Marker
                    position={position}
                    icon={customIcon}
                />
                <ZoomScaler />
            </MapContainer>
        </div>
    )
}

export default LocationMap
