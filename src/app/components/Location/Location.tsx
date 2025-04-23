'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Location = () => {
    const position: [number, number] = [50.4501, 30.5234]

    return (
        <section className='container mx-auto px-8 bg-[#F8F8F8]'>
            <div className='grid grid-cols-2 gap-6 py-12'>
                <div className='w-full h-full rounded-2xl overflow-hidden'>
                    <MapContainer
                        center={position}
                        zoom={16}
                        scrollWheelZoom={true}
                        style={{ width: '100%', height: '100%' }}>
                        <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png' />
                        <Marker position={position}>
                            <Popup>вул. Квіткова, 21-А</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div>
                    <h2 className='font-primary font-medium text-[48px] my-6'>Локація та інфраструктура</h2>
                    <p className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>
                        ЖК VOLNA розташований у зручному та спокійному районі, де все необхідне — поруч. У безпосередній
                        близькості знаходяться магазини, школи, дитячі садки, аптеки та сервіси.
                    </p>
                    <p className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E] mt-4'>
                        <strong>Зручна транспортна розв’язка</strong> дозволяє швидко дістатися в будь-яку частину
                        міста, як на авто, так і громадським транспортом.
                    </p>
                    <div className='flex justify-between items-center mt-10'>
                        <div className='flex items-center'>
                            <div className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>До метро:</div>
                            <div className='font-secondary text-[15px] leading-[150%] p-3 bg-white rounded-2xl ml-5 mr-3'>
                                Автобус 74
                            </div>
                            <div className='font-secondary text-[15px] leading-[150%] p-3 bg-white rounded-2xl'>
                                Маршрутка 174
                            </div>
                        </div>
                        <div className='font-secondary text-[15px] leading-[150%] p-3 bg-[#B4EF7B] rounded-2xl'>
                            Станція метро “Славутич”
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
