import styles from './Button.module.css'
import { IButtonProps } from './Button.props'
import cn from 'classnames'
import { ArrowButtonIcon } from '../Icon/ArrowButtonIcon'

export const Button = ({ children, arrow = 'none', appearance = 'primary', className, ...props }: IButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        >
          <ArrowButtonIcon />
        </span>
      )}
    </button>
  )
}
