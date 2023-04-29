import { ProductModel } from './../../Interface/product.interface'

import { TopLevelCategory, TopPageModel } from '../../Interface/toppage.interface'

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory
  page: TopPageModel
  product: ProductModel[]
}
