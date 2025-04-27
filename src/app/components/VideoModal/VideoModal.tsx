'use client'

import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'
import { VideoModalProps } from './VideoModal.type'

const VideoModal: React.FC<VideoModalProps> = (props: VideoModalProps) => {
    const { isOpen, setIsOpen } = props

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='bg-[rgba(0,0,0,0.88)] fixed inset-0 flex justify-center p-2 md:p-10 items-center z-[2000]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <motion.div
                        className='relative w-full h-full flex justify-center items-center'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <iframe
                            src='https://player.vimeo.com/video/1078809818?h=5b8b6e65ca&dnt=1'
                            className='absolute top-0 left-0 w-full h-full'
                            allow='autoplay;'
                            allowFullScreen
                        />
                    </motion.div>
                    <button
                        className='cursor-pointer absolute top-4 right-4 z-[2001]'
                        onClick={() => setIsOpen(false)}>
                        <Image
                            src='/icon/icon-close.svg'
                            alt='Закрыть'
                            width={40}
                            height={40}
                            className='filter invert'
                        />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default VideoModal
