import { Dispatch, SetStateAction } from 'react'

export interface VideoModalProps {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
