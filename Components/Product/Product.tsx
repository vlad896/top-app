import { IProductProps } from './Product.props'
import cn from 'classnames'
import styles from './Product.module.css'
import { Card } from '../Card/Card'
import { Rating } from '../Rating/Rating'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
import { forReview, PriceRU } from '../../helpers/helpers'
import { Hr } from '../Hr/Hr'
import Image from 'next/image'
import { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { CardReviews } from '../CardReviews/CardReviews'
import { CardReviewsForm } from '../CardReviewsForm/CardReviewsForm'
import { motion } from 'framer-motion'

export const Product = motion(
  forwardRef(({ product, className, ...props }: IProductProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [review, setReview] = useState<boolean>(false)
    const refReview = useRef<HTMLDivElement>(null)
    const ToReview = () => {
      setReview(true)
      refReview.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    return (
      <div className={className} {...props} ref={ref}>
        <Card className={styles.product}>
          <div className={styles.logo}>
            <Image
              src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
              alt={product.title}
              height={70}
              width={70}
            ></Image>
          </div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>
            <span>
              <span className="visualyHidden">цена</span>
              {PriceRU(product.price)}
            </span>
            {product.oldPrice && (
              <Tag className={styles.oldPrice} color="green">
                <span className="visualyHidden">скидка</span>
                {PriceRU(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <div className={styles.credit}>
            <span className="visualyHidden">кредит</span>
            {PriceRU(product.credit)} <span className={styles.creditspan}>/мес</span>
          </div>
          <div className={styles.rating}>
            <span className="visualyHidden">{'рейтинг' + (product.reviewAvg ?? product.initialRating)}</span>
            <Rating rating={product.reviewAvg ?? product.initialRating} />
          </div>
          <div className={styles.tags}>
            {product.categories.map((c) => (
              <Tag key={c} color="ghost">
                {c}
              </Tag>
            ))}
          </div>
          <div className={styles.priceTitle} aria-hidden={true}>
            цена
          </div>
          <div className={styles.creditTitle} aria-hidden={true}>
            в кредит
          </div>
          <div className={styles.rateTitle}>
            <a href="#ref" onClick={ToReview}>
              {product.reviewCount} {forReview(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
            </a>
          </div>
          <div className={styles.hr}>
            <Hr />
          </div>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.feature}>
            {product.characteristics.map((c) => (
              <div className={styles.characteristics} key={c.name}>
                <span className={styles.characteristicsName}>{c.name}</span>
                <span className={styles.characteristicsDots}></span>
                <span className={styles.characteristicsValue}>{c.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.advblock}>
            <div className={styles.advantages}>
              <div className={styles.advantagesTitle}>Преимущества</div>
              <div className={styles.advDesc}>{product.advantages}</div>
            </div>
            {product.disadvantages && (
              <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div>
                <div className={styles.advDesc}>{product.disadvantages}</div>
              </div>
            )}
          </div>
          <div className={cn(styles.hr, styles.hr2)}>
            <Hr />
          </div>
          <div className={styles.button}>
            <Button appearance="primary">Узнать подробнее</Button>
            <Button
              arrow={review ? 'down' : 'right'}
              appearance="ghost"
              className={styles.reviewBtn}
              onClick={() => setReview(!review)}
              aria-expanded={!review}
            >
              Читать отзывы
            </Button>
          </div>
        </Card>
        <Card
          color="blue"
          className={cn(styles.review, {
            [styles.opened]: review == true,
            [styles.closed]: review == false,
          })}
          ref={refReview}
          tabIndex={0}
        >
          {product.reviews.map((r) => (
            <CardReviews key={r._id} review={r} />
          ))}
          <CardReviewsForm productId={product._id}></CardReviewsForm>
        </Card>
      </div>
    )
  })
)
