import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';
import { MenuItem } from '../../interfacesFront/menu.interface';
import { withLayout } from '../../layout/layout';

function Course({ menu }: CourseProps): JSX.Element {
	return (
		<>

		</>
	);
}
export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<CourseProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	const { data: page } = await axios.post<CourseProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
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
