import { ITag } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';


export const Tag = ({ size = 'small', children, color = 'ghost', href, className, ...props }: ITag): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size == 'small',
				[styles.m]: size == 'medium',
				[styles.green]: color == 'green',
				[styles.ghost]: color == 'ghost',
				[styles.grey]: color == 'grey',
				[styles.primary]: color == 'primary',
				[styles.red]: color == 'red'
			})}
			{...props}
		>{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div >
	);
};