export interface ISubItem {
    text: string
}

export interface IItem {
    text: string
    sublist?: string[]
}

export interface IAnimatedList {
    items: IItem[]
    bgColorMd?: string
    isTextLeftMd?: boolean
    isPadding?: boolean
    isMargin?: boolean
}
