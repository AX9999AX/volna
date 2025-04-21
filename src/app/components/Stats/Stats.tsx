'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
    { value: '127', label: 'Апартаментів та кімнат' },
    { value: '254', label: 'Особи' },
    { value: '40+', label: 'Паркомісць' },
    { value: '56', label: 'Відеокамер' },
    { value: '15', label: 'хвилин до метро' },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export const Stats: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            className='flex justify-between gap-6 mt-12 flex-wrap'
            variants={containerVariants}
            initial='hidden'
            animate={controls}>
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}>
                    <div className='font-primary font-extrabold text-[75px] leading-[100%]'>{stat.value}</div>
                    <div className='font-secondary text-[18px]'>{stat.label}</div>
                </motion.div>
            ))}
        </motion.div>
    )
}
