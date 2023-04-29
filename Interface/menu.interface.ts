import { TopLevelCategory } from './toppage.interface'

//Взяли данные через incomnia и прогнали через сайт json to ts.

export interface PageItem {
  alias: string
  title: string
  _id: string
  category: string
}
export interface MenuItem {
  _id: {
    secondCategory: string
  }
  isOpened?: boolean
  pages: PageItem[]
}
export interface IFirstLevelMenuItem {
  route: string
  name: string
  id: TopLevelCategory
  icon: JSX.Element
}
