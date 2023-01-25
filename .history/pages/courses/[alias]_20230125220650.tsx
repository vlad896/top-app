import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../layout/layout';

function Course({ menu }: CourseProps): JSX.Element {
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

interface CourseProps extends Record<string, unknown> { //типизация возвращаемого значения
	menu: MenuItem[];
	firstCategory: number;
}
