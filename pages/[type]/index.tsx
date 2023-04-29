import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { WithLayout } from '../../Layout/Layout'
import { MenuItem } from '../../Interface/menu.interface'
import { firstLevelMenu } from '../../helpers/helpers'
import { ParsedUrlQuery } from 'querystring'
import { TopLevelCategory } from '../../Interface/toppage.interface'
import { API } from '../../helpers/api'

function Type({ firstCategory }: TypeProps) {
  return <>type {firstCategory}</>
}

export default WithLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  })

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  }
}

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
}
