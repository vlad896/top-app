import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { firstLevelMenu } from '../../helpers/helpers';
import { MenuItem } from '../../interfacesFront/menu.interface';
import { ProductModule } from '../../interfacesFront/product.interface';
import { TopLevelCategory, TopPageModel } from '../../interfacesFront/toppage.interface';
import { withLayout } from '../../layout/layout';

function Course({ menu, page, product }: CourseProps): JSX.Element {
	return (
		<>
			{product && product.length}
		</>
	);
}
export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[];
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});

	return {
		paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory: firstCategoryItem.id
	});
	const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
	const { data: product } = await axios.post<ProductModule[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
		category: page.category,
		limit: 10
	});
	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id,
			page,
			product
		}
	};
};

interface CourseProps extends Record<string, unknown> { //типизация возвращаемого значения
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	product: ProductModule[];
}
