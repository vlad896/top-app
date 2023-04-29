import { Advantages, HhData, HTag, Product, Sort, Tag } from '../../Components'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import { TopLevelCategory } from '../../Interface/toppage.interface'
import { SortEnum } from '../../Components/Sort/Sort.props'
import { useEffect, useReducer } from 'react'
import { SortReducer } from './sort.reduer'

export const TopPageComponent = ({ firstCategory, page, product }: TopPageComponentProps) => {
  const [{ product: sorted, sort }, dispatch] = useReducer(SortReducer, {
    product,
    sort: SortEnum.Rating,
  })
  {
    /*диструктуризация и достаём только продукты  */
  }

  useEffect(() => {
    dispatch({ type: 'reset', initialState: product })
  }, [product])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {product && (
          <Tag color="gray" size="m" aria-label={product.length + 'элементов'}>
            {product.length}
          </Tag>
        )}
        <Sort
          sort={sort}
          setSort={(sort: SortEnum) => {
            dispatch({ type: sort })
          }}
        />
      </div>
      <div role="list">
        {sorted && sorted.map((p) => <Product role="listitem" layout key={p._id} product={p} />)} //лучше всего здесь
        использовать ul вместе с li, но это альтернативный подход который реализован с помощью ролей
      </div>
      <div className={styles.hhTitle}>
        <HTag tag="h2">Вакансии {page.category}</HTag>
        <Tag color="red" size="m">
          hhr.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}></HhData>}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <HTag className={styles.htag} tag="h2">
            Преимущества
          </HTag>
          <Advantages advantages={page.advantages}></Advantages>
        </>
      )}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}{' '}
      {/* html-react-parser*/}
      <HTag tag="h2">Получаемые</HTag>
      {page.tags.map((t) => (
        <Tag color="primary" key={t}>
          {t}
        </Tag>
      ))}
    </div>
  )
}
