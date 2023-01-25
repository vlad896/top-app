import axios from 'axios';
import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { MenuItem } from '../../interfacesFront/menu.interface';
import { ProductModule } from '../../interfacesFront/product.interface';
import { TopPageModel } from '../../interfacesFront/toppage.interface';
import { withLayout } from '../../layout/layout';

function Course({ menu }: CourseProps): JSX.Element {
	return (
		<>

		</>
	);
}
export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
	const { data: product } = await axios.post<ProductModule[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
		category: page.category,
		limit: 10
	});
	return {
		props: {
			menu,
			firstCategory,
			page,
			product
		}
	};
};

interface CourseProps extends Record<string, unknown> { //типизация возвращаемого значения
	menu: MenuItem[];
	firstCategory: number;
	page: TopPageModel;
	product: ProductModule[];
}
