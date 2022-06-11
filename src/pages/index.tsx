import { GetStaticProps } from 'next'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Pagination } from '~/src/components/base/Pagination'
import { Category } from '../types/category'
import { Layout } from '~/src/components/base/Layout'
import { Card } from '~/src/components/base/Card'
import { ProfileCard } from '~/src/components/base/ProfileCard'
import { CategoryCard } from '~/src/components/base/CategoryCard'

type Props = {
  blog: Blog[]
  category: Category[]
  totalCount: number
}

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog', queries: { limit: 7, offset: 0 } })
  const category = await client.get({ endpoint: 'categories' })

  return {
    props: {
      blog: blog.contents,
      category: category.contents,
      totalCount: blog.totalCount,
    },
  }
}

function Home({ blog, category, totalCount }: Props) {
  return (
    <Layout>
      <article className="w-4/5 mt-2">
        <Card blogs={blog} />
        <Pagination totalCount={totalCount} />
      </article>
      <div className="w-1/5  mt-5">
        <ProfileCard />
        <CategoryCard category={category} />
      </div>
    </Layout>
  )
}

export default Home
