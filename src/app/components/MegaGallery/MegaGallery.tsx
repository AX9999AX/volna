'use client'

import { useRef, useState } from 'react'
import { MegaGalleryType } from './MegaGallery.type'
import { motion, useInView } from 'framer-motion'
import Territory from './Territory'
import Interior from './Interior'

const MegaGallery = () => {
    const ref = useRef(null)
    const [galleryType, setGallaryType] = useState<MegaGalleryType>(MegaGalleryType.Territory)
    const isInView = useInView(ref, {
        once: true,
    })

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
                <p className='text-center xl:text-left w-full xl:w-[50%] font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Ознайомтесь з атмосферою ЖК VOLNA через фото та відео. Побачте комплекс з висоти, інтер’єри
                    апартаментів та кімнат, місць загального користування, ландшафтний дизайн території.
                </p>
                <div className='w-full xl:w-auto mt-6 xl:mt-0 flex gap-4 justify-center xl:justify-baseline'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`cursor-pointer font-secondary text-[15px] text-black p-3 ${
                            galleryType === MegaGalleryType.Territory ? 'bg-btn-active' : 'bg-btn-default'
                        }  rounded-2xl`}
                        onClick={() => setGallaryType(MegaGalleryType.Territory)}>
                        Фотографії території
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`cursor-pointer font-secondary text-[15px] text-black p-3 ${
                            galleryType === MegaGalleryType.Interior ? 'bg-btn-active' : 'bg-btn-default'
                        }  rounded-2xl`}
                        onClick={() => setGallaryType(MegaGalleryType.Interior)}>
                        Фотографії інтер’єру
                    </motion.button>
                </div>
            </div>
            {MegaGalleryType.Territory === galleryType && <Territory isInView={isInView} />}
            {MegaGalleryType.Interior === galleryType && <Interior isInView={isInView} />}
        </section>
    )
}

export default MegaGallery
