import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import { FirstLevelMenuItem } from '../../top-app/interfacesFront/menu.interface';
import styles from './Menu.module.css';
import CoursesIcon from './icon/courses.svg';
import BookIcon from './icon/book.svg';
import ProductIcon from './icon/product.svg';
import cn from 'classnames';
import ServicesIcon from './icon/services.svg';
import { TopLevelCategory } from '../interfacesFront/toppage.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'service', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'book', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductIcon />, id: TopLevelCategory.Products }
];

export const Menu = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(menu => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: menu.id == firstCategory
							})}>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</a>
						{menu.id == firstCategory && buildSecondLevel()}
					</div>
				))}
			</>
		);
	};
	const buildSecondLevel = () => {

	};
	const buildThirdLevel = () => {

	};

	return (
		<div className={styles.menu}>
			<ul>
				{buildFirstLevel()};
			</ul>
		</div>
	);
};