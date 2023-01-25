import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { ISidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};