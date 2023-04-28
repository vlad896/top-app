import { ReviewModel } from './../../Interface/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICardReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
	review:ReviewModel;
}