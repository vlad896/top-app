import { ISideBarProps } from './SideBar.props';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import cn from 'classnames';
import styles from './SideBar.module.css';
import Link from 'next/link';
import { Search } from '../../Components';


export const SideBar=({className,...props}:ISideBarProps)=>{
	return(
		<div className={cn(className, styles.SideBar)} {...props} >
			<Link href={'/#'}>
				<Logo className={ styles.logo} />
			</Link>
			<Search/>
			<Menu/>
		</div>
	);
};