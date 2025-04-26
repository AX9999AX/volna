'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IMegaGallery } from './MegaGallery.type'

const Territory = (props: IMegaGallery) => {
    const { isInView } = props
    const [isViewMore, setIsViewMore] = useState<boolean>(false)

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='order-2 md:order-0 relative overflow-hidden min-h-[300px] md:min-h-0 rounded-[20px]'>
                    <Image
                        fill
                        src={'/mega-gallery/mega-gallery-territory-1.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <div className='order-1 md:order-0 col-span-1 md:col-span-2'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='relative aspect-video overflow-hidden rounded-[20px]'>
                        {isInView && (
                            <>
                                <iframe
                                    src='https://player.vimeo.com/video/1078809818?h=5b8b6e65ca&background=1&autoplay=1&muted=1&loop=1&dnt=1'
                                    className='absolute top-0 left-0 w-full h-full'
                                    allow='autoplay;'
                                    allowFullScreen
                                />
                            </>
                        )}
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'>
                    <Image
                        fill
                        src={'/mega-gallery/mega-gallery-territory-2.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'>
                    <Image
                        fill
                        src={'/mega-gallery/mega-gallery-territory-3.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'>
                    <Image
                        fill
                        src={'/mega-gallery/mega-gallery-territory-4.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                {isViewMore && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'>
                            <Image
                                fill
                                src={'/mega-gallery/mega-gallery-territory-5.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'>
                            <Image
                                fill
                                src={'/mega-gallery/mega-gallery-territory-6.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'>
                            <Image
                                fill
                                src={'/mega-gallery/mega-gallery-territory-7.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                    </>
                )}
            </div>
            {!isViewMore && (
                <div className='flex justify-center items-center mt-6'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`cursor-pointer font-secondary text-[15px] text-black w-[190px] h-[50px] bg-btn-active rounded-2xl`}
                        onClick={() => setIsViewMore(true)}>
                        Переглянути Більше
                    </motion.button>
                </div>
            )}
        </>
    )
}

export default Territory
