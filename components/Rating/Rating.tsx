import styles from './Rating.module.css';
import cn from 'classnames';
import { IRatingProps } from './Rating.props';
import StarIcon from './Star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: IRatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constactRating(rating);
	}, [rating]);

	const constactRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDislay(i + 1)}
					onMouseLeave={() => changeDislay(rating)}
					onClick={() => onClick(i + 1)}
				>
					<StarIcon

						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDislay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constactRating(i);
	};
	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};
	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};