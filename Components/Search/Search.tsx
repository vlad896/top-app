import cn from 'classnames'
import { ISearchProps } from './Search.props'
import styles from './Search.module.css'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { SearchIcon } from '../Icon/SearchIcon'
export const Search = ({ className, ...props }: ISearchProps) => {
  const [search, setSearh] = useState<string>('')
  const router = useRouter()

  const Enter = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      GoToSearch()
    }
  }

  const GoToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    })
  }

  return (
    <form className={cn(styles.search, className)} {...props} role="search">
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearh(e.target.value)}
        onKeyDown={() => Enter}
      />

      <Button appearance="primary" className={styles.button} onClick={GoToSearch} aria-label="Поиск по сайту">
        <SearchIcon />
      </Button>
    </form>
  )
}
