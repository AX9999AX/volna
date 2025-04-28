'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { IAnimatedList } from './AnimatedList.type'

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

const AnimatedList: React.FC<IAnimatedList> = (props: IAnimatedList) => {
    const { items, bgColorMd, isTextLeftMd, isPadding, isMargin, isTickVisableMobile } = props

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

    const allignClass = isTextLeftMd ? 'text-left' : 'text-center md:text-left'
    const paddingClass = isPadding ? 'p-0' : 'p-3 md:p-0'
    const marginClass = isMargin ? 'my-1 md:my-3' : 'my-3'

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    return (
        <motion.ul
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={listVariants}>
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    className={marginClass}
                    variants={itemVariants}>
                    <div className='flex items-start'>
                        <div
                            className={`${
                                isTickVisableMobile ? 'block' : 'hidden md:block'
                            }hidden md:block mr-4 min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]  md:min-w-[20px] md:min-h-[20px] md:max-w-[20px] md:max-h-[20px]`}>
                            <Image
                                src='/icon/icon-tick.svg'
                                alt='Tick'
                                width={20}
                                height={20}
                                className='w-[16px] h-[16px] md:w-[20px] md:h-[20px]'
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <p
                                className={`w-full bg-white ${
                                    bgColorMd ? bgColorMd : 'md:bg-[#f8f8f8]'
                                } ${allignClass} ${paddingClass} font-secondary font-normal text-[15px] md:text-[18px] leading-[150%] text-[#4E4E4E] rounded-[8px] md:rounded-[0px]`}>
                                {item.text}
                            </p>

                            {item.sublist && item.sublist.length > 0 && (
                                <ul className='marker:text-[#B4EF7B] font-secondary ml-6 list-disc text-left text-[14px] md:text-[16px] text-[#4E4E4E]'>
                                    {item.sublist.map((subItem, subIndex) => (
                                        <li key={subIndex}>{subItem}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default AnimatedList
