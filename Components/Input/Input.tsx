import styles from './Input.module.css';
import { IInputProps } from './Input.props';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({ className, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<input className={cn(className, styles.input)} ref={ref} {...props} />
	);
});