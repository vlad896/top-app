import cn from 'classnames';
import styles from './Sidebar.module.css';
import { ISidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
};