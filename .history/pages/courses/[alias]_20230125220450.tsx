import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../layout/layout';

function Course() {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);
	useEffect(() => {
		console.log('counter' + counter);
		return function cleam() {
			console.log('unmount');
		};
	});
	return (
		<>

		</>
	);
}
export default withLayout(Course);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> { //типизация возвращаемого значения
	menu: MenuItem[];
	firstCategory: number;
}
