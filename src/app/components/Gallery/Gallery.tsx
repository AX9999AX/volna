'use client'

import Image from 'next/image'
import { GalleryProps } from './Gallery.type'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Gallery = (props: GalleryProps) => {
    const { images } = props
    const [selectedImage, setSelectedImage] = useState<number>(0)

    return (
        <div className='relative w-full'>
            <div className='relative w-full h-[500px] rounded-[33px] overflow-hidden'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={images[selectedImage]}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className='absolute inset-0'>
                        <Image
                            fill
                            src={images[selectedImage]}
                            alt='Main Image'
                            className='object-cover rounded-[33px]'
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className='absolute flex justify-around items-center p-2 rounded-[27px] bottom-0 right-0 z-[1000] w-[170px] bg-white m-5'>
                {images.map((item, index) => {
                    const isSelected = selectedImage === index
                    return (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.95 }}
                            className={`cursor-pointer w-[40px] h-[40px] ${
                                isSelected ? 'ring-3 ring-[#B4EF7B]' : ''
                            } rounded-full overflow-hidden`}>
                            <Image
                                width={40}
                                height={40}
                                src={item}
                                alt={`Thumbnail ${index}`}
                                className='w-full h-full object-cover'
                            />
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery
