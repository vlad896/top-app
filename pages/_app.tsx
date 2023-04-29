import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import '../styles/globals.css'
import Router from 'next/router'
import React from 'react'
import ym from 'react-yandex-metrika'
import { YMInitializer } from 'react-yandex-metrika'

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url)
  }
})
export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="prconnect" href="https://mc.yandex.ru" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300;1,400;1,500;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta property="og:locale" content="ru_Ru" />
      </Head>
      <YMInitializer accounts={[]} options={{ webvisor: true, defer: true }} version="2" />
      <Component {...pageProps} />
    </>
  )
}
