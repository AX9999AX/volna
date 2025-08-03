'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import AnimatedList from '../AnimatedList/AnimatedList'
import ImageModal from '../ImageModal/ImageModal'

const AppartmentStandart = () => {
    const ref = useRef(null)
    const [isViewMore, setIsViewMore] = useState<boolean>(false)
    const isInView = useInView(ref, { once: true })
    const [isOpen, setisOpen] = useState<boolean>(false)
    const [currentImage, setCurrentImage] = useState<string>('')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <div
            ref={ref}
            onClick={() => setisOpen(true)}
            className={`${!isOpen ? 'cursor-pointer' : ''} p-2 md:p-5 border-2 border-[#B4EF7B] rounded-[33px] mt-10`}>
            <div
                className={`flex ${!isOpen ? 'flex-col xl:flex-row' : ''} justify-between items-center ${isOpen ? 'my-6' : 'my-6 xl:my-0'
                    }`}>
                <h3
                    className={`mb-3 xl:mb-0 w-full md:w-auto text-center md:text-left font-secondary font-normal md:font-bold text-[20px] ${!isOpen ? 'xl:tex-[28px] 2xl:text-[32px]' : 'lg:text-[32px]'
                        } leading-[115%]`}>
                    Апартаменти категорії «Cтандарт»
                </h3>
                {!isOpen && (
                    <div className='text-center md:text-left mb-3 xl:mb-0 font-secondary text-[14px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                        натисни тут, щоб дізнатися про варіант більше
                    </div>
                )}
                <div className={`${isOpen ? 'hidden md:block' : 'block md:block'} bg-[#B4EF7B] px-6 py-2 rounded-2xl`}>
                    <span className='font-secondary font-bold text-[20px] lg:text-[32px]'>Від ₴10.000</span>
                    <span className='font-secondary text-[12px] text-[#18181B]'>/місяць</span>
                </div>
            </div>
            {isOpen && (
                <>
                    <div className='flex gap-10 flex-wrap xl:flex-nowrap'>
                        <div className='w-full xl:w-1/2'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='cursor-pointer relative min-h-[250px] md:min-h-[500px] m-2'
                                onClick={() => {
                                    setCurrentImage('/appartments/standart-1.jpg')
                                    setIsModalOpen(true)
                                }}>
                                <Image
                                    fill
                                    src={'/appartments/standart-1.jpg'}
                                    alt={'Alt'}
                                    className='object-cover rounded-[25px]'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                />
                            </motion.div>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className='cursor-pointer hidden md:block relative min-h-[250px] md:min-h-[300px] m-2'
                                    onClick={() => {
                                        setCurrentImage('/appartments/standart-2.jpg')
                                        setIsModalOpen(true)
                                    }}>
                                    <Image
                                        fill
                                        src={'/appartments/standart-2.jpg'}
                                        alt={'Alt'}
                                        className='object-cover rounded-[25px]'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className='cursor-pointer hidden md:block relative min-h-[250px] md:min-h-[300px] m-2'
                                    onClick={() => {
                                        setCurrentImage('/appartments/standart-3.jpg')
                                        setIsModalOpen(true)
                                    }}>
                                    <Image
                                        fill
                                        src={'/appartments/standart-3.jpg'}
                                        alt={'Alt'}
                                        className='object-cover rounded-[25px]'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                    />
                                </motion.div>
                                {isViewMore && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className='cursor-pointer block md:hidden relative min-h-[250px] md:min-h-[300px] m-2'
                                            onClick={() => {
                                                setCurrentImage('/appartments/standart-2.jpg')
                                                setIsModalOpen(true)
                                            }}>
                                            <Image
                                                fill
                                                src={'/appartments/standart-2.jpg'}
                                                alt={'Alt'}
                                                className='object-cover rounded-[25px]'
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className='cursor-pointer block md:hidden relative min-h-[250px] md:min-h-[300px] m-2'
                                            onClick={() => {
                                                setCurrentImage('/appartments/standart-3.jpg')
                                                setIsModalOpen(true)
                                            }}>
                                            <Image
                                                fill
                                                src={'/appartments/standart-3.jpg'}
                                                alt={'Alt'}
                                                className='object-cover rounded-[25px]'
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className='cursor-pointer relative min-h-[250px] md:min-h-[300px] m-2'
                                            onClick={() => {
                                                setCurrentImage('/appartments/standart-4.jpg')
                                                setIsModalOpen(true)
                                            }}>
                                            <Image
                                                fill
                                                src={'/appartments/standart-4.jpg'}
                                                alt={'Alt'}
                                                className='object-cover rounded-[25px]'
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className='cursor-pointer relative min-h-[250px] md:min-h-[300px] m-2'
                                            onClick={() => {
                                                setCurrentImage('/appartments/standart-5.jpg')
                                                setIsModalOpen(true)
                                            }}>
                                            <Image
                                                fill
                                                src={'/appartments/standart-5.jpg'}
                                                alt={'Alt'}
                                                className='object-cover rounded-[25px]'
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className='cursor-pointer relative min-h-[250px] md:min-h-[300px] m-2'
                                            onClick={() => {
                                                setCurrentImage('/appartments/standart-6.jpg')
                                                setIsModalOpen(true)
                                            }}>
                                            <Image
                                                fill
                                                src={'/appartments/standart-6.jpg'}
                                                alt={'Alt'}
                                                className='object-cover rounded-[25px]'
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                            />
                                        </motion.div>
                                    </>
                                )}
                            </div>
                            {!isViewMore && (
                                <div className='flex justify-center md:justify-start items-center mt-6'>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className={`cursor-pointer font-secondary text-[15px] text-black w-[190px] h-[50px] bg-btn-active rounded-2xl`}
                                        onClick={() => setIsViewMore(true)}>
                                        Переглянути Більше
                                    </motion.button>
                                </div>
                            )}
                        </div>
                        <div className='w-full xl:w-1/2'>
                            <p className='text-center xl:text-left font-secondary text-[15px] md:text-[18px] leading-[150%] text-[#4E4E4E] mb-5'>
                                Апартаменти категорії «стандарт» обладнані:
                            </p>
                            <AnimatedList
                                items={[
                                    {
                                        text: '1 двомісним ліжком або 2 одномісними ліжками, з ортопедичними матрацами',
                                    },
                                    {
                                        text: 'Одежною шафою',
                                    },
                                    {
                                        text: 'Дзеркалом з вішалкою для верхнього одягу',
                                    },
                                    {
                                        text: 'Меблевим стелажем',
                                    },
                                    {
                                        text: 'Столом з 2 стільцями',
                                    },
                                    {
                                        text: 'Мікрохвильовою пічкою',
                                    },
                                    {
                                        text: 'Електрочайником',
                                    },
                                    {
                                        text: 'Комплектом посуду та столових приладів',
                                    },
                                    {
                                        text: 'Wi-Fi роутером',
                                    },
                                    {
                                        text: 'Кондиціонером',
                                    },
                                    {
                                        text: 'Електрорадіатором з індивідуальним керуванням',
                                    },
                                    {
                                        text: 'Рулонними шторами на вікнах.',
                                    },
                                    {
                                        text: 'Для апартаментів категорії «стандарт», у зонах загального користування облаштовані:',
                                        sublist: [
                                            '2 кухні-їдальні, обладнані кухонними меблями та побутовою технікою',
                                            '7 душових кабін',
                                            '2 велики блоки санвузлів (чоловічий та жіночий)',
                                        ],
                                    },
                                ]}
                                bgColorMd='md:bg-white'
                                isTextLeftMd={true}
                                isPadding={true}
                                isMargin={true}
                                isTickVisableMobile={true}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center my-4'>
                        <div className='block md:hidden bg-[#B4EF7B] px-6 py-2 rounded-2xl'>
                            <span className='font-secondary font-bold text-[20px] lg:text-[32px]'>Від ₴10.000</span>
                            <span className='font-secondary text-[12px] text-[#18181B]'>/місяць</span>
                        </div>
                    </div>
                </>
            )}
            <ImageModal
                src={currentImage}
                alt={'ЖК Волна'}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            />
        </div>
    )
}

export default AppartmentStandart
