'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id: string) => {
        setIsOpen(false)
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <>
            <button
                className='block xl:hidden'
                onClick={handleOpen}>
                <Menu
                    width={32}
                    height={32}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='bg-[#B4EF7B] fixed inset-0 z-[1001] flex flex-col justify-between text-black'>
                            <div className='flex justify-between mx-6 my-3 z-[1001]'>
                                <Image
                                    src='/icon/logo.svg'
                                    alt='Лого'
                                    width={121}
                                    height={33}
                                />
                                <button onClick={() => setIsOpen(false)}>
                                    <Image
                                        src='/icon/icon-close.svg'
                                        alt='Закрыть'
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </div>

                            <ul className='flex flex-col justify-center items-center z-50'>
                                {[
                                    ['about', 'Про Нас'],
                                    ['appartments', 'Варіанти Проживання'],
                                    ['gallery', 'Галерея'],
                                    ['contacts', 'Контакти'],
                                ].map(([id, label]) => (
                                    <motion.li
                                        key={id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='text-center cursor-pointer font-secondary text-[32px] text-black mb-8'
                                        onClick={() => scrollToSection(id)}>
                                        {label}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className='flex justify-center mb-12 z-50'>
                                <a
                                    href='https://maps.app.goo.gl/z8JHz6j7TTC9RUxt6'
                                    target='_blank'
                                    className='flex justify-center items-center cursor-pointer font-secondary text-[15px] text-black w-[250px] h-[40px] bg-white rounded-4xl'>
                                    Переглянути в Google Maps
                                </a>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default MobileNav
