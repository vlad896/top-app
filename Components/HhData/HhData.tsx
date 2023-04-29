import { IHhDataProps } from './HhData.props'
import styles from './HHData.module.css'
import { Card } from '../Card/Card'
import RateIcon from './StarsRating.svg'
import { PriceRU } from '../../helpers/helpers'
export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: IHhDataProps) => {
  return (
    <div className={styles.hh}>
      <Card color={'white'} className={styles.hhCounter}>
        <div className={styles.hhCounterTitle}>Всего вакансий</div>
        <div className={styles.hhStatCount}>{count}</div>
      </Card>
      <Card color={'white'} className={styles.salary}>
        <div>
          <div className={styles.hhCounterTitle}>Начальный</div>
          <div className={styles.hhCount}>{PriceRU(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.hhCounterTitle}>Средний</div>
          <div className={styles.hhCount}>{PriceRU(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.hhCounterTitle}>Профессионал</div>
          <div className={styles.hhCount}>{PriceRU(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  )
}
