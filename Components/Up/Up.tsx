import styles from './Up.module.css'
import UpIcon from './arrow.svg'

export const Up = () => {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button className={styles.Up} onClick={scrollToUp}>
      <UpIcon />
    </button>
  )
}
