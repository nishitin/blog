import { Card } from '~/src/components/base/Card'
import { CategoryCard } from '~/src/components/base/CategoryCard'
import { Layout } from '~/src/components/base/Layout'
import { Pagination } from '~/src/components/base/Pagination'
import { ProfileCard } from '~/src/components/base/ProfileCard'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Category } from '~/src/types/category'

type Props = {
  blog: Blog[]
  category: Category[]
  totalCount: number
}

// ここの時点で絞り込む
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  // #TODO ここの/5は表示するデータの数にもなるのでUI上の地に修正
  const PER_PAGE = 5
  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((i: number) => `/page/${i}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context?.params?.id as string
  const data = await client.get({ endpoint: 'blog', queries: { offset: parseInt(id) * 5 - 5 } })
  const category = await client.get({ endpoint: 'categories' })

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: category.contents,
      currentPage: id,
    },
  }
}

export default function Page({ blog, category, totalCount }: Props) {
  return (
    <Layout>
      <article className="w-4/5 mt-2">
        <Card blogs={blog} />
        <Pagination totalCount={totalCount} />
      </article>
      <div className="w-1/5 mt-5">
        <ProfileCard />
        <CategoryCard category={category} />
      </div>
    </Layout>
  )
}
