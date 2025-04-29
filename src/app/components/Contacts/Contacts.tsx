'use client'

import { motion } from 'framer-motion'

const Contacts = () => {
    return (
        <section
            id='contacts'
            className='container mx-auto px-8 mt-20 mb-20'>
            <div className='flex justify-between items-center flex-wrap mt-8 md:mt-20 mb-4 md:mb-10'>
                <h2 className='w-full md:w-auto text-center md:text-left font-primary font-medium text-[24px] md:text-[48px] 2xl:text-[64px] leading-[128%]'>
                    Контактна інформація
                </h2>
                <p className='w-full md:w-auto text-center md:text-left font-secondary font-normal text-[13px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Завжди на звʼязку
                </p>
            </div>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 xl:col-span-6 2xl:col-span-7'>
                    <p className='hidden md:block font-secondary text-[18px] text-[#4E4E4E] leading-[150%]'>
                        З усіх питань, стосовно проживання в ЖК, звертайтесь до адміністратора.
                    </p>
                    <p className='hidden md:block font-secondary text-[18px] text-[#4E4E4E] leading-[150%]'>
                        Ми завжди на зв’ язку та готові відповісти на ваші питання.
                    </p>
                    <p className='hidden md:hidden text-center font-secondary text-[15px] text-[#4E4E4E] leading-[150%]'>
                        З усіх питань, стосовно проживання в ЖК, звертайтесь до адміністратора. Ми завжди на зв’ язку та
                        готові відповісти на ваші питання.
                    </p>
                    <div className='flex items-center mt-0 md:mt-10 flex-wrap'>
                        <div className='hidden md:block w-full md:w-auto mb-3 md:my-0 text-center md:text-left font-primary font-medium text-[14px] md:text-[26px] leading-[126%] mr-0 md:mr-[90px]'>
                            Месенджери
                        </div>
                        <div className='w-full md:w-auto flex justify-center md:justify-baseline'>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                href='viber://chat?number=%2B380674271737'
                                target='_blank'
                                className='flex justify-center items-center cursor-pointer border-2 text-[14px] md:text-[15px] rounded-[24px] border-[#E5E5E5] p-2 mr-4'>
                                Viber
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                href='http://t.me/Volna_Kyiv_Residence'
                                target='_blank'
                                className='flex justify-center items-center cursor-pointer border-2 text-[14px] md:text-[15px] rounded-[24px] border-[#E5E5E5] p-2'>
                                Telegram
                            </motion.a>
                        </div>
                    </div>
                    <div className='flex items-center mt-3 md:mt-8 flex-wrap'>
                        <div className='w-full md:w-auto my-3 md:my-0 text-center md:text-left font-primary font-medium text-[14px] md:text-[26px] leading-[126%] mr-0 md:mr-[28px]'>
                            Соціальні Мережі
                        </div>
                        <div className='w-full md:w-auto flex justify-center md:justify-baseline'>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                href='https://www.tiktok.com/@gk_volna'
                                target='_blank'
                                className='flex justify-center items-center cursor-pointer border-2 text-[14px] md:text-[15px] rounded-[24px] border-[#E5E5E5] p-2 mr-4'>
                                TikTok
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                href='https://www.instagram.com/volna_kyiv'
                                target='_blank'
                                className='flex justify-center items-center cursor-pointer border-2 text-[14px] md:text-[15px] rounded-[24px] border-[#E5E5E5] p-2 mr-4'>
                                Instagram
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                href='https://www.facebook.com/volna.kyiv/'
                                target='_blank'
                                className='flex justify-center items-center cursor-pointer border-2 text-[14px] md:text-[15px] rounded-[24px] border-[#E5E5E5] p-2'>
                                Facebook
                            </motion.a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center flex-col col-span-12 xl:col-span-6 2xl:col-span-5 bg-[#B4EF7B] rounded-[29px] p-6 shadow-md'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-4'>
                        <div className='font-primary font-medium text-xl sm:text-2xl leading-[128%] text-gray-900 mb-2 sm:mb-0'>
                            Адреса
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            href='https://maps.app.goo.gl/z8JHz6j7TTC9RUxt6'
                            target='_blank'
                            className='bg-white text-gray-800 rounded-2xl px-4 py-2 font-secondary text-[14px] sm:text-base'>
                            Київська обл., Золочівська ТГ, вул. Квіткова, 21-А
                        </motion.a>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-4'>
                        <div className='font-primary font-medium text-xl sm:text-2xl leading-[128%] text-gray-900 mb-2 sm:mb-0'>
                            Телефон
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            href='tel:+380674271737'
                            className='bg-white text-gray-800 rounded-2xl px-4 py-2 font-secondary text-[14px] sm:text-base'>
                            +380 (67) 427-17-37
                        </motion.a>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
                        <div className='font-primary font-medium text-xl sm:text-2xl leading-[128%] text-gray-900 mb-2 sm:mb-0'>
                            Email
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            href='mailto:volna.residence@gmail.com'
                            className='bg-white text-gray-800 rounded-2xl px-4 py-2 font-secondary text-[14px] sm:text-base'>
                            volna.residence@gmail.com
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
