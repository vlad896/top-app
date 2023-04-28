import { ICard } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(
  (
    { children, color = "white", className, ...props }: ICard,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={cn(styles.Card, className, {
          [styles.blue]: color == "blue",
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
