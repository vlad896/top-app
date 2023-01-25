import { ILayoutProps } from './layout.props';
import styles from './layout.module.css';
import cn from 'classnames';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { FunctionComponent } from 'react';
import { AppContextProvider } from '../context/app.context';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={ }, firstCategory={ }>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};