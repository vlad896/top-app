import { IFooterProps } from './Footer.props'
import cn from 'classnames'
import styles from './Footer.module.css'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.first}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank" className={styles.second}>
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className={styles.third}>
        Политика конфиденциальности
      </a>
    </footer>
  )
}
