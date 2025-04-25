'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { IAnimatedList } from './AnimatedList.type'

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const AnimatedList: React.FC<IAnimatedList> = (props: IAnimatedList) => {
    const { items } = props

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

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
            {items.map((text, index) => (
                <motion.li
                    key={index}
                    className='my-3'
                    variants={itemVariants}>
                    <div className='flex items-center'>
                        <div className='hidden md:block mr-4 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]'>
                            <Image
                                src='/icon/icon-tick.svg'
                                alt='Tick'
                                width={20}
                                height={20}
                                className='w-[20px] h-[20px]'
                            />
                        </div>
                        <p className='w-full bg-white md:bg-[#f8f8f8] text-center md:text-left p-3 md:p-0 font-secondary font-normal text-[14px] md:text-[18px] leading-[150%] text-[#4E4E4E] rounded-[8px] md:rounded-[0px]'>
                            {text}
                        </p>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default AnimatedList
