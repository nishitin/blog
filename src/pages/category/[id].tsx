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

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'categories' })
  // pathsの理解を深める
  const paths = data.contents.map((content: Category) => `/category/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', queries: { filters: `category[equals]${id}` } })
  const category = await client.get({ endpoint: 'categories' })

  return {
    props: {
      blog: data.contents,
      category: category.contents,
      totalCount: data.totalCount,
    },
  }
}

export default function CategoryPage({ blog, category, totalCount }: Props) {
  return (
    <Layout>
      <article className="w-3/5 mt-2">
        <Card blogs={blog} />
        <Pagination totalCount={totalCount} />
      </article>
      <div className="w-1/5 ml-20 mt-5">
        <ProfileCard />
        <CategoryCard category={category} />
      </div>
    </Layout>
  )
}
