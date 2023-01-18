
import { IPtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'medium', children, className, ...props }: IPtagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.big]: size == 'big'
			})}
			{...props}
		>
			{children}
		</p>
	);
};