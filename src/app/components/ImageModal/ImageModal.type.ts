import { Dispatch, SetStateAction } from 'react'

export interface ImageModalProps {
    src: string
    alt: string
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
