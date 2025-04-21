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
            <div className='flex justify-between items-center h-[120px] mx-0 md:mx-8 px-8 rounded-t-[29px] bg-[#F8F8F8]'>
                <div>
                    <Image
                        src='/logo.svg'
                        alt='Лого'
                        width={288}
                        height={78}
                    />
                </div>
                <nav className='hidden xl:block'>
                    <ul className='flex'>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer font-secondary text-[18px] text-black mr-10'
                            onClick={() => scrollToSection('about')}>
                            Про Нас
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer font-secondary text-[18px] text-black mr-10'
                            onClick={() => scrollToSection('rooms')}>
                            Варіанти Проживання
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer font-secondary text-[18px] text-black mr-10'
                            onClick={() => scrollToSection('gallery')}>
                            Галерея
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer font-secondary text-[18px] text-black'
                            onClick={() => scrollToSection('contacts')}>
                            Контакти
                        </motion.li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
