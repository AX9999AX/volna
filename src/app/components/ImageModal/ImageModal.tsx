import Image from 'next/image'
import { ImageModalProps } from './ImageModal.type'

const ImageModal: React.FC<ImageModalProps> = (props: ImageModalProps) => {
    const { src, alt, isOpen, setIsOpen } = props

    return (
        <>
            {isOpen && (
                <div className='bg-[rgba(0,0,0,0.88)] fixed inset-0 flex justify-center p-2 md:p-10 items-center z-[2000]'>
                    <div className='relative w-full h-full flex justify-center items-center'>
                        <Image
                            src={src}
                            alt={alt}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
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
                </div>
            )}
        </>
    )
}

export default ImageModal
