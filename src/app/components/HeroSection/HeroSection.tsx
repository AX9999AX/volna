'use client'

import { motion } from 'framer-motion'
import Header from '../Header/Header'
import Image from 'next/image'

const HeroSection = () => {
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
        <section className="w-full bg-none md:bg-[url('/bg/bg-hero.avif')] bg-cover bg-center h-auto md:h-[980px]">
            <Header />
            <div className='container mx-auto px-8 mt-6 md:mt-32 2xl:mt-60'>
                <div className='hidden md:flex mb-3'>
                    <div
                        className={`flex justify-center items-center font-secondary text-[15px] text-black w-[135px] h-[40px] bg-btn-active rounded-4xl mr-3`}>
                        Київ, Оскороки
                    </div>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        href='https://maps.app.goo.gl/z8JHz6j7TTC9RUxt6'
                        target='_blank'
                        className={`flex justify-center items-center cursor-pointer font-secondary text-[15px] text-black w-[250px] h-[40px] bg-btn-active rounded-4xl`}>
                        Переглянути в Google Maps
                    </motion.a>
                </div>
                <div className='relative'>
                    <h1 className='text-black md:text-white font-primary font-medium text-[32px] text-center md:text-left md:text-[48px] lg:text-[60px] xl:text-[80px] leading-[128%]'>
                        Сучасний простір <br /> для комфортного життя
                    </h1>
                    <div className='flex justify-center md:hidden my-4'>
                        <div
                            className={`flex justify-center items-center font-secondary text-[12px] text-black w-[135px] h-[40px] bg-btn-active rounded-4xl mr-3`}>
                            Київ, Оскороки
                        </div>
                        <a
                            href='https://www.google.com.ua/'
                            target='_blank'
                            className={`flex justify-center items-center cursor-pointer font-secondary text-[12px] text-black w-[250px] h-[40px] bg-btn-active rounded-4xl`}>
                            Переглянути в Google Maps
                        </a>
                    </div>
                    <p className='hidden 2xl:block absolute right-[40px] top-[20px] font-secondary text-[18px] text-white leading-[150%] w-[560px]'>
                        Житловий комплекс «Volna» - сучасний комплекс для комфортного проживання в Києві, на закритій
                        території з охороною, на березі Дніпра.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        onClick={() => scrollToSection('about')}
                        className='hidden 2xl:flex cursor-pointer absolute bottom-[20px] right-0 bg-[#F2F2F2] p-4 rounded-2xl font-secondary text-[15px] text-black'>
                        Про Житловий Комплекс
                        <Image
                            src={'/icon/arrow-down.svg'}
                            alt={'arrow'}
                            width={20}
                            height={20}
                            className='ml-4 h-[20px] w-[20px]'
                        />
                    </motion.button>
                    <div className='flex justify-between items-center'>
                        <p className='block 2xl:hidden mt-3 font-secondary text-[14px] md:text-[18px] text-center md:text-left text-[#4E4E4E] md:text-white leading-[150%] w-full md:max-w-[400px] lg:max-w-[600px]'>
                            Житловий комплекс «Volna» - сучасний комплекс для комфортного проживання в Києві, на
                            закритій території з охороною, на березі Дніпра.
                        </p>
                        <button className='hidden md:flex 2xl:hidden cursor-pointer bg-[#F2F2F2] p-4 rounded-2xl font-secondary text-[15px] text-black'>
                            Про Житловий Комплекс
                            <Image
                                src={'/icon/arrow-down.svg'}
                                alt={'arrow'}
                                width={20}
                                height={20}
                                className='ml-4 h-[20px] w-[20px]'
                            />
                        </button>
                    </div>
                </div>
                <div className='flex md:hidden justify-center items-center my-4'>
                    <Image
                        src={'/bg/bg-hero.avif'}
                        alt='bg'
                        width={327}
                        height={218}
                        className='rounded-2xl'
                    />
                </div>
                <div className='bg-[#F2F4F7] md:bg-white rounded-3xl p-5 mt-5'>
                    <h2 className='text-black text-center md:text-left font-primary font-medium text-[16px] md:text-[32px] leading-[128%] mb-5'>
                        Чому краще жити саме в нас
                    </h2>
                    <div className='flex justify-center md:justify-start 2xl:justify-between items-center flex-wrap'>
                        <div className='text-center font-secondary text-[12px] md:text-[15px] leading-[150%] p-2 md:p-5 text-black bg-white md:bg-[#F2F2F2] rounded-2xl my-1 md:my-3 mr-1 md:mr-3'>
                            Варіанти проживання на різний «гаманець»
                        </div>
                        <div className='font-secondary text-[12px] md:text-[15px] leading-[150%] p-2 md:p-5 text-black bg-white md:bg-[#F2F2F2] rounded-2xl my-1 md:my-3 mr-1 md:mr-3'>
                            Власна автостоянка на 40 авто
                        </div>
                        <div className='font-secondary text-[12px] md:text-[15px] leading-[150%] p-2 md:p-5 text-black bg-white md:bg-[#F2F2F2] rounded-2xl my-1 md:my-3 mr-1 md:mr-3'>
                            Закрита територія
                        </div>
                        <div className='font-secondary text-[12px] md:text-[15px] leading-[150%] p-2 md:p-5 text-black bg-white md:bg-[#F2F2F2] rounded-2xl my-1 md:my-3 mr-1 md:mr-3'>
                            Цілодобова охорона
                        </div>
                        <div className='font-secondary text-[12px] md:text-[15px] leading-[150%] p-2 md:p-5 text-black bg-white md:bg-[#F2F2F2] rounded-2xl my-1 md:my-3 mr-1 md:mr-3'>
                            Затишна територія
                        </div>
                    </div>
                    <div className='hidden md:flex justify-between items-center my-6 flex-wrap'>
                        <div className='flex items-center'>
                            <div className='font-secondary text-[18px] leading-[150%]'>Підходить:</div>
                            <div className='font-secondary text-[15px] leading-[150%] p-3 border-2 rounded-4xl ml-4 mr-3 border-[#F2F2F2]'>
                                Студентам
                            </div>
                            <div className='font-secondary text-[15px] leading-[150%] p-3 border-2 rounded-4xl mr-3 border-[#F2F2F2]'>
                                Сімейним парам
                            </div>
                            <div className='font-secondary text-[15px] leading-[150%] p-3 border-2 rounded-4xl mr-3 border-[#F2F2F2]'>
                                Тим, хто у відрядженні
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            onClick={() => scrollToSection('contacts')}
                            className='cursor-pointer flex font-secondary text-[15px] leading-[150%] px-5 py-3 border-2 rounded-4xl mr-3 md:mt-4 lg:mt-0 border-[#F2F2F2] bg-[#B4EF7B]'>
                            Консультація по оренді
                            <Image
                                src={'/icon/arrow-up.svg'}
                                alt={'arrow'}
                                width={20}
                                height={20}
                                className='ml-4 h-[20px] w-[20px]'
                            />
                        </motion.button>
                    </div>
                </div>
                <div className='flex md:hidden justify-center items-center'>
                    <button className='my-5 cursor-pointer flex font-secondary text-[15px] leading-[150%] px-5 py-3 border-2 rounded-4xl mr-3 md:mt-4 lg:mt-0 border-[#F2F2F2] bg-[#B4EF7B]'>
                        Консультація по оренді
                        <Image
                            src={'/icon/arrow-up.svg'}
                            alt={'arrow'}
                            width={20}
                            height={20}
                            className='ml-4 h-[20px] w-[20px]'
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
