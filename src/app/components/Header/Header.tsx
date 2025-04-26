'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import MobileNav from './MobileNav'
import Link from 'next/link'

const Header = () => {
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
        <header className='container mx-auto'>
            <div className='flex justify-between items-center h-[63px] mx-0 md:mx-8 px-8 rounded-b-[29px] bg-[#F8F8F8]'>
                <Link href={'/'}>
                    <Image
                        src='/icon/logo.svg'
                        alt='Лого'
                        width={121}
                        height={33}
                    />
                </Link>
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
                            onClick={() => scrollToSection('appartments')}>
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
                <MobileNav />
            </div>
        </header>
    )
}

export default Header
