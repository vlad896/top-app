import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IPtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode;
	size?: 'small' | 'medium' | 'big';
}