import { GetStaticProps } from 'next'
import { useState } from 'react'
import { HTag, Button, Ptag, Tag, Rating, Input, TextArea, Search } from '../Components/index'
import { WithLayout } from '../Layout/Layout'
import axios from 'axios'
import { MenuItem } from '../Interface/menu.interface'
import { API } from '../helpers/api'

function Home({ menu }: HomeProps) {
  const [sum, setSum] = useState<number>(1)

  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <HTag tag="h2">{sum}</HTag>
      <Button arrow="down" appearance="ghost" onClick={() => setSum((x) => x + 1)}>
        Button
      </Button>
      <Button arrow="right" appearance="primary" onClick={() => setSum((x) => x - 1)}>
        Button
      </Button>
      <Ptag size="small">какой то P тэг</Ptag>
      <Tag color="red" href="#">
        google link
      </Tag>
      <Tag size="s" color="green" href="#">
        google link
      </Tag>
      <Tag size="m" color="primary" href="#">
        google link
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable></Rating>
      <Input placeholder="Текст" />
      <TextArea />
      <Search />
    </>
  )
}

export default WithLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  })

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}
interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
