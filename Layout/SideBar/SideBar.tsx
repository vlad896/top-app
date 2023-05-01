import { ISideBarProps } from './SideBar.props'
import { Menu } from '../Menu/Menu'
import { Logo } from '../../Components/Icon/Logo'
import cn from 'classnames'
import styles from './SideBar.module.css'
import Link from 'next/link'
import { Search } from '../../Components'

export const SideBar = ({ className, ...props }: ISideBarProps) => {
  return (
    <div className={cn(className, styles.SideBar)} {...props}>
      <Link href={'/#'}>
        <Logo />
      </Link>
      <Search />
      <Menu />
    </div>
  )
}
