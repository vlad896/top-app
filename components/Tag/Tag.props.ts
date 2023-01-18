import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'small' | 'medium',
	children: ReactNode,
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string
}