'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IMegaGallery } from './MegaGallery.type'
import ImageModal from '../ImageModal/ImageModal'

const Interior = (props: IMegaGallery) => {
    const { isInView } = props
    const [isViewMore, setIsViewMore] = useState<boolean>(false)
    const [currentImage, setCurrentImage] = useState<string>('')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] md:min-h-0 rounded-[20px]'
                    onClick={() => {
                        setCurrentImage('/mega-gallery/interior-1.jpg')
                        setIsModalOpen(true)
                    }}>
                    <Image
                        fill
                        src={'/mega-gallery/interior-1.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                    onClick={() => {
                        setCurrentImage('/mega-gallery/interior-2.jpg')
                        setIsModalOpen(true)
                    }}>
                    <Image
                        fill
                        src={'/mega-gallery/interior-2.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                    onClick={() => {
                        setCurrentImage('/mega-gallery/interior-3.jpg')
                        setIsModalOpen(true)
                    }}>
                    <Image
                        fill
                        src={'/mega-gallery/interior-3.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                    onClick={() => {
                        setCurrentImage('/mega-gallery/interior-4.jpg')
                        setIsModalOpen(true)
                    }}>
                    <Image
                        fill
                        src={'/mega-gallery/interior-4.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                    onClick={() => {
                        setCurrentImage('/mega-gallery/interior-5.jpg')
                        setIsModalOpen(true)
                    }}>
                    <Image
                        fill
                        src={'/mega-gallery/interior-5.jpg'}
                        alt='Gallery 1'
                        className='object-cover'
                        sizes='50vw'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                    onClick={() => {
                        setCurrentImage('/mega-gallery/interior-6.jpg')
                        setIsModalOpen(true)
                    }}>
                    <Image
                        fill
                        src={'/mega-gallery/interior-6.jpg'}
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
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-7.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-7.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-8.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-8.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-9.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-9.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-10.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-10.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-11.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-11.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-12.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-12.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-13.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-13.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-14.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-14.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-15.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-15.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-16.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-16.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-17.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-17.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-18.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-18.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-19.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-19.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-20.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-20.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-21.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-21.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-22.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-22.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-23.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-23.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-24.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-24.jpg'}
                                alt='Gallery 1'
                                className='object-cover'
                                sizes='50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='cursor-pointer order-2 md:order-0 relative overflow-hidden min-h-[300px] rounded-[20px]'
                            onClick={() => {
                                setCurrentImage('/mega-gallery/interior-25.jpg')
                                setIsModalOpen(true)
                            }}>
                            <Image
                                fill
                                src={'/mega-gallery/interior-25.jpg'}
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
            <ImageModal
                src={currentImage}
                alt={'ЖК Волна'}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            />
        </>
    )
}

export default Interior
