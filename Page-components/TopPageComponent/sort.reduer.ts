import { ProductModel } from './../../Interface/product.interface'
import { SortEnum } from '../../Components/Sort/Sort.props'

export type sortActions =
  | {
      type: SortEnum.Price
    }
  | { type: SortEnum.Rating }
  | { type: 'reset'; initialState: ProductModel[] }

export interface SortReducerState {
  sort: SortEnum
  product: ProductModel[]
}
export const SortReducer = (state: SortReducerState, action: sortActions) => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        product: state.product.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      }
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        product: state.product.sort((a, b) => (a.price > b.price ? 1 : -1)),
      }
    case 'reset':
      return {
        sort: SortEnum.Rating,
        product: action.initialState,
      }
    default:
      throw new Error('Error')
  }
}
