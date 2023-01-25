import { useContext } from 'react';
import { AppContext } from '../context/app.context';
import styles from './Menu.module.css';

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