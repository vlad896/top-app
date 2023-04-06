import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHTagprops extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>,HTMLHeadElement>{
	tag: 'h1' | 'h2' | 'h3';
	children:ReactNode
}
