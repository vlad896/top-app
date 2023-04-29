import styles from './TextArea.module.css'
import cn from 'classnames'
import { ITextAreaProps } from './TextArea.props'
import { ForwardedRef, forwardRef } from 'react'

export const TextArea = forwardRef(
  ({ className, ...props }: ITextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return <textarea className={cn(className, styles.textarea)} ref={ref} {...props} />
  }
)
