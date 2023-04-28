import { IRatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./Star.svg";
import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from "react";

export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, ...props }: IRatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    ); //Заполнили массив из 5 пустых элементов

    useEffect(() => {
      constructArray(rating);
    }, [rating]);

    const constructArray = (currentRating: number) => {
      const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
            role={isEditable ? "slider" : ""}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-valuemin={1}
            aria-label={isEditable ? "Укажите рейтинг" : "рейтинг" + rating}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1} //-1 вне таб index
              onKeyDown={() => KeyDown}
            />
          </span>
        );
      });
      setRatingArray(updateArray);
    };

    const KeyDown = (e: KeyboardEvent<SVGAElement>) => {
      if (!isEditable || !setRating) {
        return;
      }
      if (e.code == "ArrowRight" || e.key == "ArrowUp") {
        if (!rating) {
          setRating(2);
        } else {
          e.preventDefault();
          setRating(rating < 5 ? rating + 1 : 5);
        }
      }
      if (e.code == "ArrowLeft" || e.key == "ArrowDown") {
        e.preventDefault();
        setRating(rating > 1 ? rating - 1 : 1);
      }
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructArray(i);
    };
    return (
      <div ref={ref} {...props}>
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
      </div>
    );
  }
);
