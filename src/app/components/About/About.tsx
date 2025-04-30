'use client'

import { motion } from 'framer-motion'
import Gallery from '../Gallery/Gallery'
import { Stats } from '../Stats/Stats'
import Image from 'next/image'

const About = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section
            id='about'
            className='container mx-auto px-8'>
            <div className='flex justify-between items-center flex-wrap mt-8 md:mt-20 mb-4 md:mb-10'>
                <h2 className='w-full md:w-auto text-center md:text-left font-primary font-medium text-[24px] md:text-[48px] 2xl:text-[64px] leading-[128%]'>
                    Про Житловий Комплекс
                </h2>
                <p className='w-full md:w-auto text-center md:text-left font-secondary font-normal text-[13px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Продуманий простір для щоденного комфорту
                </p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-2 xl:col-span-1'>
                    <Gallery images={['/gallery/about-1.jpg', '/gallery/about-2.jpg', '/gallery/about-3.jpg']} />
                </div>
                <div className='col-span-2 xl:col-span-1 grid grid-cols-1 gap-6'>
                    <p className='text-center md:text-left font-secondary text-[15px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                        Житловий комплекс «VOLNA»,
                        <strong>створений з думкою про комфорт та безпеку мешканців</strong>, розташований у тихому
                        затишному районі Києва, на Осокорках.
                    </p>
                    <div className='hidden md:grid grid-cols-2 gap-6'>
                        <div className='col-span-2 md:col-span-1 h-[350px] md:h-[410px] bg-[#F8F8F8] rounded-[29px]'>
                            <h3 className='hidden md:block text-center my-4 font-primary font-medium text-[26px] leading-[128%] text-[#1D1D1F]'>
                                Комфорт та безпека мешканців
                            </h3>
                            <div className='mt-4 md:mt-0 flex justify-center mb-4'>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    onClick={() => scrollToSection('advantages')}
                                    className='font-secondary text-[15px] cursor-pointer border-2 border-[#E5E5E5] bg-white rounded-[24px] w-[200px] h-[48px]'>
                                    Переваги Проживання
                                </motion.button>
                            </div>
                            <div className='relative min-h-[240px] m-2'>
                                <Image
                                    fill
                                    src={'/about/security-house.avif'}
                                    alt={'Alt'}
                                    className='object-cover rounded-[25px]'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                            </div>
                        </div>
                        <div className='hidden md:block col-span-2 md:col-span-1 h-[410px] bg-[#F8F8F8] rounded-[29px]'>
                            <div className='relative h-[240px] m-2'>
                                <Image
                                    fill
                                    src={'/about/appartment-lux.avif'}
                                    alt={'Alt'}
                                    className='object-cover rounded-[25px]'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                            </div>
                            <h3 className='text-center mt-3 font-secondary text-[24px] leading-[150%] text-[#4E4E4E]'>
                                Ціна оренди від
                            </h3>
                            <div className='text-center font-secondary text-[24px] leading-[150%] text-[#4E4E4E]'>
                                ₴4.000
                            </div>
                            <div className='flex justify-center mt-5'>
                                <motion.button
                                    onClick={() => scrollToSection('appartments')}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className='flex justify-center items-center font-secondary text-[15px] cursor-pointer bg-[#B4EF7B] rounded-[24px] px-4 h-[48px]'>
                                    Варіанти Проживання
                                    <Image
                                        src={'/icon/icon-arrow-right.svg'}
                                        alt={'arrow'}
                                        width={20}
                                        height={20}
                                        className='h-[20px] w-[20px]'
                                    />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Stats />
            <div className='grid grid-cols-2 gap-6 mt-6 md:mt-12'>
                <p className='text-center md:text-left col-span-2 md:col-span-1 font-secondary text-[15px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Тут <strong>кожна деталь продумана до дрібниць</strong> - від облаштування апартаментів та кімнат до
                    озеленення і ландшафтного дизайну території, що створює <strong>приємне середовище</strong>, де
                    хочеться жити, працювати і відпочивати.
                </p>
                <p className='hidden md:block text-center md:text-left col-span-2 md:col-span-1 font-secondary text-[15px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Комплекс має закриту територію з охороною 24/7 , власну автостоянку, автономну інженерну
                    інфраструктуру, включно з власною артезіанською свердловиною для водопостачання
                </p>
            </div>
            <div className='grid md:hidden grid-cols-2 gap-6 my-6'>
                <div className='col-span-2 md:col-span-1 h-[350px] md:h-[410px] bg-[#F8F8F8] rounded-[29px]'>
                    <h3 className='hidden md:block text-center my-4 font-primary font-medium text-[26px] leading-[128%] text-[#1D1D1F]'>
                        Комфорт та безпека мешканців
                    </h3>
                    <div className='mt-4 md:mt-0 flex justify-center mb-4'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            onClick={() => scrollToSection('advantages')}
                            className='font-secondary text-[15px] cursor-pointer border-2 border-[#E5E5E5] bg-white rounded-[24px] w-[200px] h-[48px]'>
                            Переваги Проживання
                        </motion.button>
                    </div>
                    <div className='relative min-h-[240px] m-2'>
                        <Image
                            fill
                            src={'/about/security-house.avif'}
                            alt={'Alt'}
                            className='object-cover rounded-[25px]'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
