import { ILayoutProps } from './layout.props';
import styles from './layout.module.css';
import cn from 'classnames';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { FunctionComponent } from 'react';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>
					{children}
				</div>
			</div>
			<Footer />
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};