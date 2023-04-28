import { IHrProps } from "./Hr.props";
import styles from "./Hr.module.css";
import cn from "classnames";

export const Hr = ({ className, ...props }: IHrProps) => {
  return <hr className={cn(styles.hr, className)} {...props}></hr>;
};
