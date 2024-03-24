import { twMerge } from 'tailwind-merge'
import classNames from 'classnames'

export function cn(...inputs) {
    return twMerge(classNames(inputs))
}