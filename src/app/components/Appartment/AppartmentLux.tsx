'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import AnimatedList from '../AnimatedList/AnimatedList'

const AppartmentLux = () => {
    const ref = useRef(null)
    const [isViewMore, setIsViewMore] = useState<boolean>(false)
    const isInView = useInView(ref, { once: true })

    return (
        <div className='p-2 md:p-5 border-2 border-[#B4EF7B] rounded-[33px]'>
            <div className='flex justify-between items-center my-6'>
                <h3 className='w-full md:w-auto text-center md:text-left font-secondary font-bold text-[20px] lg:text-[32px] leading-[115%]'>
                    Апартаменти категорії «Люкс»
                </h3>
                <div className='hidden md:block bg-[#B4EF7B] px-6 py-2 rounded-2xl'>
                    <span className='font-secondary font-bold text-[20px] lg:text-[32px]'>₴11.000</span>
                    <span className='font-secondary text-[12px] text-[#18181B]'>/місяць</span>
                </div>
            </div>
            <div
                ref={ref}
                className='flex gap-10 flex-wrap xl:flex-nowrap'>
                <div className='w-full xl:w-1/2'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='relative min-h-[250px] md:min-h-[500px] m-2'>
                        <Image
                            fill
                            src={'/appartments/lux-1.jpg'}
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
                            className='hidden md:block relative min-h-[250px] md:min-h-[300px] m-2'>
                            <Image
                                fill
                                src={'/appartments/lux-2.jpg'}
                                alt={'Alt'}
                                className='object-cover rounded-[25px]'
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='hidden md:block relative min-h-[250px] md:min-h-[300px] m-2'>
                            <Image
                                fill
                                src={'/appartments/lux-3.jpg'}
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
                                    className='block md:hidden relative min-h-[250px] md:min-h-[300px] m-2'>
                                    <Image
                                        fill
                                        src={'/appartments/lux-2.jpg'}
                                        alt={'Alt'}
                                        className='object-cover rounded-[25px]'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className='block md:hidden relative min-h-[250px] md:min-h-[300px] m-2'>
                                    <Image
                                        fill
                                        src={'/appartments/lux-3.jpg'}
                                        alt={'Alt'}
                                        className='object-cover rounded-[25px]'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className='relative min-h-[250px] md:min-h-[300px] m-2'>
                                    <Image
                                        fill
                                        src={'/appartments/lux-4.jpg'}
                                        alt={'Alt'}
                                        className='object-cover rounded-[25px]'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className='relative min-h-[250px] md:min-h-[300px] m-2'>
                                    <Image
                                        fill
                                        src={'/appartments/lux-5.jpg'}
                                        alt={'Alt'}
                                        className='object-cover rounded-[25px]'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className='relative min-h-[250px] md:min-h-[300px] m-2'>
                                    <Image
                                        fill
                                        src={'/appartments/lux-6.jpg'}
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
                    <p className='text-center xl:text-left font-secondary text-[14px] md:text-[18px] leading-[150%] text-[#4E4E4E] mb-5'>
                        В «Комфортній» частини ЖК «VOLNA», зі своєю окремою рецепцією, розташовано 69 двомісних
                        апартаментів категорії «люкс» та «напівлюкс»
                    </p>
                    <p className='text-center md:text-left font-secondary text-[14px] md:text-[20px] font-bold'>
                        Облаштований:
                    </p>
                    <AnimatedList
                        items={[
                            {
                                text: '1 двомісним ліжком або 2 одномісними ліжками, з ортопедичними матрацами',
                            },
                            {
                                text: 'Шафа для одягу',
                            },
                            {
                                text: 'Дзеркало з вішалкою для верхнього одягу',
                            },
                            {
                                text: 'Меблевий стелаж',
                            },
                            {
                                text: 'Стіл з 2 стільцями',
                            },
                            {
                                text: 'Мінікухня з електроплитою',
                            },
                            {
                                text: 'Холодильник',
                            },
                            {
                                text: 'Комплект посуду та столових приладів',
                            },
                            {
                                text: 'Кондиціонер',
                            },
                            {
                                text: 'Wi-Fi роутер',
                            },
                            {
                                text: 'Електрорадіатор з індивідуальним керуванням',
                            },
                            {
                                text: 'Рулонні штори на вікнах',
                            },
                            {
                                text: 'Індивідуальний санвузл обладнаний:',
                                sublist: [
                                    'Душовою кабіною',
                                    'Умивальником',
                                    'Шафкою з дзеркалом',
                                    'Унітазом',
                                    'Сушкою для рушників',
                                    'Бойлером',
                                    'Вішалкою для одягу',
                                ],
                            },
                        ]}
                        bgColorMd='md:bg-white'
                        isTextLeftMd={true}
                        isPadding={true}
                        isMargin={true}
                    />
                </div>
            </div>
            <div className='flex justify-center items-center my-4'>
                <div className='block md:hidden bg-[#B4EF7B] px-6 py-2 rounded-2xl'>
                    <span className='font-secondary font-bold text-[20px] lg:text-[32px]'>₴11.000</span>
                    <span className='font-secondary text-[12px] text-[#18181B]'>/місяць</span>
                </div>
            </div>
        </div>
    )
}

export default AppartmentLux
