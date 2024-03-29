import { CoursesIcon } from '../Components/Icon/CoursesIcon'
import { BooksIcon } from '../Components/Icon/BooksIcon'
import { ServicesIcon } from '../Components/Icon/ServicesIcon'
import { ProductIcon } from '../Components/Icon/ProductIcon'
import { TopLevelCategory } from '../Interface/toppage.interface'
import { IFirstLevelMenuItem } from '../Interface/menu.interface'

export const FIRST_LEVEL_MENU: IFirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'product',
    name: 'Товары',
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
  },
]

export const PriceRU = (price: number) =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽')
export const forReview = (number: number, title: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return title[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
}
