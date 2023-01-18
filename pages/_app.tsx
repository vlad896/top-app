import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>My Top</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
		</Head>
		<Component {...pageProps} />
	</>;
}
