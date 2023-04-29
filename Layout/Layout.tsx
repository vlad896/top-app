import { ILayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import cn from 'classnames'
import { Header } from './Header/Header'
import { SideBar } from './SideBar/SideBar'
import { Footer } from './Footer/Footer'
import { FunctionComponent, useState, useRef, KeyboardEvent } from 'react'
import { AppContextProvaider, IAppContext } from '../context/app.coontext'
import { Up } from '../Components'

const Layout = ({ children }: ILayoutProps) => {
  const [isSkiplinkDisplayed, setIsSkiplinkDisplayed] = useState<boolean>(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault()
      bodyRef.current?.focus()
    }
    setIsSkiplinkDisplayed(false)
  }

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsSkiplinkDisplayed(true)}
        tabIndex={1}
        className={cn(styles.skiplink, {
          [styles.skiplinkOpen]: isSkiplinkDisplayed,
        })}
        onKeyDown={skipContentAction}
      >
        Сразу к содержанию
      </a>

      <Header className={styles.header} />
      <SideBar className={styles.sidebar} />
      <main className={styles.body} ref={bodyRef} tabIndex={0} role="main">
        {children}
      </main>
      <Up></Up>
      <Footer className={styles.footer} />
    </div>
  )
}
export const WithLayout = <T extends Record<string, unknown> & IAppContext>(Components: FunctionComponent<T>) => {
  return function WithLayoutComponent(props: T) {
    return (
      <AppContextProvaider firstCategory={props.firstCategory} menu={props.menu}>
        <Layout>
          <Components {...props}></Components>
        </Layout>
      </AppContextProvaider>
    )
  }
}
