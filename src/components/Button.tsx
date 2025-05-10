import { type FC, type PropsWithChildren } from 'react'
import type { PropsButton } from '../types'


export const PrimaryButton: FC<PropsWithChildren<PropsButton>> = ({ onClick, children, className }) => {
    return (
        <button className={`${className} flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-white px-4 py-1.5 rounded-full cursor-pointer`} onClick={onClick}>{children}</button>
    )
}

export const TertiaryButton: FC<PropsWithChildren<PropsButton>> = ({ onClick, children, className }) => {
    return (
        <button className={`${className} flex items-center text-xs cursor-pointer text-emerald-500 py-1 px-2.5 rounded-full hover:bg-emerald-100 transition-all duration-300`} onClick={onClick}>{children}</button>
    )
}
