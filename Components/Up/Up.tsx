import { ArrowIcon } from '../Icon/ArrowIcon'
import styles from './Up.module.css'

export const Up = () => {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button className={styles.Up} onClick={scrollToUp}>
      <ArrowIcon />
    </button>
  )
}
