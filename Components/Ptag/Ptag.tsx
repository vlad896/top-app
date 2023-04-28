import { IPtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({
  children,
  size = "medium",
  className,
  ...props
}: IPtagProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == "small",
        [styles.medium]: size == "medium",
        [styles.big]: size == "big",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
