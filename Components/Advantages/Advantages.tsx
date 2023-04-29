import styles from './Advantages.module.css'
import { IAdvantagesProps } from './Advantages.props'
import CheckIcon from './check.svg'

export const Advantages = ({ advantages }: IAdvantagesProps) => {
  return (
    <div>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantages}>
          <CheckIcon className={styles.icon} />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.line}></hr>
          <div>{a.description}</div>
        </div>
      ))}
    </div>
  )
}
