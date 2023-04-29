import { ReactNode, DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

export interface IPtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
  size: 'small' | 'medium' | 'big'
}
