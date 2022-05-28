import { GetStaticProps } from 'next'
import { Header } from '~/src/components/base/Header'
import { BlogListScreens } from '~/src/components/screens/BlogListScreens'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Footer } from '../components/base/Footer'
import { Pagination } from '~/src/components/base/Pagination'
import { Category } from '../types/category'

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
    <div>
      <Header />
      <BlogListScreens blogs={blog} category={category} />
      <div className="mb-20">
        <Pagination totalCount={totalCount} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
