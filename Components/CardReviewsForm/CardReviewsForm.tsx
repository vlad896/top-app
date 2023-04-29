import { ICardReviewsFormProps } from './CardReviewsForm.props'
import cn from 'classnames'
import styles from './CardReviewsForm.module.css'
import CloseIcon from './close.svg'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { TextArea } from '../TextArea/TextArea'
import { Rating } from '../Rating/Rating'
import { ICardReviewsForm } from './CardReviewsForm.interface'
export const CardReviewsForm = ({ productId, className, ...props }: ICardReviewsFormProps) => {
  //const { register, control, handleSubmit, formState } = useForm<ICardReviewsFormProps>();

  const onSubmit = (data: ICardReviewsForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={() => onSubmit}>
      <div className={cn(styles.CardReviewsForm, className)} {...props}>
        <Input placeholder="Имя" aria-invalid />
        <Input placeholder="Фамилия" />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={2}></Rating>
        </div>
        <TextArea placeholder="Текст отзыва" className={styles.TextArea} aria-label="Текст отзыва" />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.span}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
        <CloseIcon className={styles.CloseIcon}></CloseIcon>
      </div>
    </form>
  )
}
