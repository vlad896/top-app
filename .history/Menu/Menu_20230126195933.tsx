import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import { FirstLevelMenuItem } from '../../top-app/interfacesFront/menu.interface';
import styles from './Menu.module.css';
import Courses from './icon/courses.svg';
import Book from './icon/book.svg';
import Product from './icon/product.svg';
import Services from './icon/services.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses', name: 'Курсы', icon
	}
];

export const Menu = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	return (
		<>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
};