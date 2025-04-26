'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { MegaGalleryType } from './MegaGallery.type'
import { motion, useInView } from 'framer-motion'

const MegaGallery = () => {
    const ref = useRef(null)
    const [isViewMore, setIsViewMore] = useState<boolean>(false)
    const [galleryType, setGallaryType] = useState<MegaGalleryType>(MegaGalleryType.Territory)
    const isInView = useInView(ref, { once: true })

    return (
        <section
            id='gallery'
            ref={ref}
            className='container mx-auto px-8 mt-20 mb-20'>
            <div className='flex justify-between items-center flex-wrap mt-8 md:mt-20 mb-10'>
                <h2 className='w-full md:w-auto text-center md:text-left font-primary font-medium text-[24px] md:text-[48px] 2xl:text-[64px] leading-[128%]'>
                    Галерея
                </h2>
                <p className='w-full md:w-auto text-center md:text-left font-secondary font-normal text-[12px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Побачити — щоб відчути
                </p>
            </div>

            <div className='flex justify-between items-center flex-wrap'>
                <p className='w-full xl:w-[50%] font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Ознайомтесь з атмосферою ЖК VOLNA через фото та відео. Побачте комплекс з висоти, інтер’єри
                    апартаментів та кімнат, місць загального користування, ландшафтний дизайн території.
                </p>
                <div className='w-full xl:w-auto mt-6 xl:mt-0 flex gap-4 justify-center xl:justify-baseline'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`cursor-pointer font-secondary text-[15px] text-black w-[190px] h-[50px] ${
                            galleryType === MegaGalleryType.Territory ? 'bg-btn-active' : 'bg-btn-default'
                        }  rounded-2xl`}
                        onClick={() => setGallaryType(MegaGalleryType.Territory)}>
                        Фотографії території
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`cursor-pointer font-secondary text-[15px] text-black w-[190px] h-[50px] ${
                            galleryType === MegaGalleryType.Interior ? 'bg-btn-active' : 'bg-btn-default'
                        }  rounded-2xl`}
                        onClick={() => setGallaryType(MegaGalleryType.Interior)}>
                        Фотографії інтер’єру
                    </motion.button>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 mt-12'>
                <div className='grid grid-cols-1 grid-rows-3 gap-6'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='relative overflow-hidden h-[260px] rounded-[20px]'>
                        <Image
                            fill
                            src={'/mega-gallery/mega-gallery-territory-1.jpg'}
                            alt='Gallery 1'
                            className='object-cover'
                            sizes='50vw'
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='row-span-2 relative overflow-hidden rounded-[20px]'>
                        <Image
                            fill
                            src={'/mega-gallery/mega-gallery-territory-2.jpg'}
                            alt='Gallery 1'
                            className='object-cover'
                            sizes='50vw'
                        />
                    </motion.div>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 grid-rows-[auto_260px] gap-6'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='relative aspect-video overflow-hidden rounded-[20px]'>
                            <iframe
                                src={
                                    'https://player.vimeo.com/video/1078809818?h=5b8b6e65ca&background=1&autoplay=1&muted=1&loop=1&dnt=1'
                                }
                                className='absolute top-0 left-0 w-full h-full'
                                allow='autoplay;'
                                allowFullScreen
                            />
                        </motion.div>
                        <div className='grid grid-cols-2 gap-6'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='relative overflow-hidden rounded-[20px]'>
                                <Image
                                    fill
                                    src={'/mega-gallery/mega-gallery-territory-3.jpg'}
                                    alt='Gallery 3'
                                    className='object-cover'
                                    sizes='50vw'
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='relative overflow-hidden rounded-[20px]'>
                                <Image
                                    fill
                                    src={'/mega-gallery/mega-gallery-territory-4.jpg'}
                                    alt='Gallery 4'
                                    className='object-cover'
                                    sizes='50vw'
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
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

            {isViewMore && (
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='relative min-h-[260px] overflow-hidden rounded-[20px]'>
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
                        className='relative overflow-hidden rounded-[20px]'>
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
                        className='relative overflow-hidden rounded-[20px]'>
                        <Image
                            fill
                            src={'/mega-gallery/mega-gallery-territory-7.jpg'}
                            alt='Gallery 1'
                            className='object-cover'
                            sizes='50vw'
                        />
                    </motion.div>
                </div>
            )}
        </section>
    )
}

export default MegaGallery
