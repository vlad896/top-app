import { ISortProps, SortEnum } from './Sort.props'
import styles from './Sort.module.css'
import cn from 'classnames'
import SortIcon from './Sort.svg'

export const Sort = ({ sort, setSort, className, ...props }: ISortProps) => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sorted} id="sort">
        Сортировка
      </div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating,
        })}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.icon} /> По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price,
        })}
        aria-selected={sort == SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.icon} />
        По цене
      </button>
    </div>
  )
}
