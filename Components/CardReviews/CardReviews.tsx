import { ICardReviewsProps } from "./CardReviews.props";
import cn from "classnames";
import styles from "./CardReviews.module.css";
import UserIcon from "./User.svg";
import { Hr } from "../Hr/Hr";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating/Rating";
export const CardReviews = ({
  review,
  className,
  ...props
}: ICardReviewsProps) => {
  const { name, title, createdAt, rating, description } = review;
  return (
    <div className={cn(styles.CardReviews, className)} {...props}>
      <UserIcon />
      <div className={styles.titles}>
        <span className={styles.name}>{name}: </span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating}></Rating>
      </div>
      <div className={styles.description}>{description}</div>
      <Hr className={styles.hr}></Hr>
    </div>
  );
};
