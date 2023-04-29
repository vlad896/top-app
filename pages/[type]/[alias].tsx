import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { API } from '../../helpers/api'
import { firstLevelMenu } from '../../helpers/helpers'
import { MenuItem } from '../../Interface/menu.interface'
import { ProductModel } from '../../Interface/product.interface'
import { TopLevelCategory, TopPageModel } from '../../Interface/toppage.interface'
import { WithLayout } from '../../Layout/Layout'
import { TopPageComponent } from '../../Page-components'
import Head from 'next/head'
import { Error404 } from '../404'

function TopPage({ firstCategory, page, product }: TopPageProps) {
  if (!page || !product) {
    return <Error404 />
  }

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="article" />
      </Head>
      <TopPageComponent firstCategory={firstCategory} page={page} product={product} />
    </>
  )
}
export default WithLayout(TopPage)

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = []
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id,
    })
    paths = paths.concat(menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`)))
  }

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type)
  if (!firstCategoryItem) {
    return {
      notFound: true,
    }
  }
  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    })
    if (menu.length == 0) {
      return {
        notFound: true,
      }
    }
    const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias)
    const { data: product } = await axios.post<ProductModel[]>(API.product.find, {
      category: page.category,
      limit: 100,
    })
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        product,
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  page: TopPageModel
  product: ProductModel[]
}
