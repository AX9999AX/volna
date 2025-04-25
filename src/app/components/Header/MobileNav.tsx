'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [clickPos, setClickPos] = useState({ x: 0, y: 0 })

    const scrollToSection = (id: string) => {
        setIsOpen(false)
        const section = document.getElementById(id)
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            })
        }
    }

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e
        setClickPos({ x: clientX, y: clientY })
        console.log(clientX, clientY)
        setIsOpen(true)
    }

    return (
        <>
            <button
                className='block xl:hidden'
                onClick={handleOpen}>
                <Image
                    width={32}
                    height={32}
                    src={'/icon/menu-mobile.svg'}
                    alt={'Меню'}
                    className='h-[32px] w-[32px]'
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 100 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.45, ease: 'easeInOut' }}
                            style={{
                                position: 'fixed',
                                top: clickPos.y - 15,
                                left: clickPos.x,
                                transform: 'translate(-50%, -50%)',
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#B4EF7B',
                                borderRadius: '50%',
                                zIndex: 40,
                                transformOrigin: 'center',
                            }}
                        />

                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className='fixed inset-0 z-50 flex flex-col justify-between text-black'>
                            <div className='flex justify-between mx-6 my-3 z-50'>
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
                                    ['rooms', 'Варіанти Проживання'],
                                    ['gallery', 'Галерея'],
                                    ['contacts', 'Контакти'],
                                ].map(([id, label]) => (
                                    <motion.li
                                        key={id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='cursor-pointer font-secondary text-[32px] text-black mb-8'
                                        onClick={() => scrollToSection(id)}>
                                        {label}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className='flex justify-center mb-12 z-50'>
                                <a className='flex justify-center items-center cursor-pointer font-secondary text-[15px] text-black w-[250px] h-[40px] bg-white rounded-4xl'>
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
