'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
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
        <footer className='container mt-20 mx-auto'>
            <div className='flex flex-col py-5 xl:py-0 gap-4 lg:flex-row justify-between items-center min-h-[120px] mx-0 md:mx-8 px-8 rounded-t-[29px] bg-[#F8F8F8]'>
                <div>
                    <Image
                        src='/icon/logo.svg'
                        alt='Лого'
                        width={288}
                        height={78}
                    />
                </div>
                <div className='order-last md:order-none flex flex-wrap justify-center items-center'>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        href='mailto:volna.residence@gmail.com'
                        className='mr-1 md:mr-5 mb-2 2xl:mb-0 bg-white p-3 rounded-2xl font-secondary text-[14px] md:text-[15px]'>
                        volna.residence@gmail.com
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        href='tel:+380674271737'
                        className='bg-white mb-2 xl:mb-0 p-3 rounded-2xl font-secondary text-[14px] md:text-[15px]'>
                        +380 (67) 427-17-37
                    </motion.a>
                </div>
                <nav>
                    <ul className='flex'>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer font-secondary text-[14px] md:text-[18px] text-black mr-5 text-nowrap'
                            onClick={() => scrollToSection('about')}>
                            Про Нас
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer font-secondary text-[14px] md:text-[18px] text-black mr-5 text-nowrap'
                            onClick={() => scrollToSection('appartments')}>
                            Варіанти Проживання
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer font-secondary text-[14px] md:text-[18px] text-black mr-5'
                            onClick={() => scrollToSection('gallery')}>
                            Галерея
                        </motion.li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
