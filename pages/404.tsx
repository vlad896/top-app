import { HTag } from '../Components'
import { WithLayout } from '../Layout/Layout'

export function Error404() {
  //для того чтобы переиспользовать компонент был добавлен export вначале

  return (
    <>
      <HTag tag="h2">Ошибка 404</HTag>
    </>
  )
}

export default WithLayout(Error404)
