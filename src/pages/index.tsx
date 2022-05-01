import { GetStaticProps } from 'next'
import { Header } from '~/src/components/base/Header'
import { BlogListScreens } from '~/src/components/screens/BlogListScreens'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Footer } from '../components/base/Footer'
import { Category } from '../types/category'

type Props = {
  blog: Blog[]
  category: Category[]
}

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' })
  const category = await client.get({ endpoint: 'categories' })

  return {
    props: {
      blog: blog.contents,
      category: category.contents,
    },
  }
}

function Home({ blog, category }: Props) {
  return (
    <div>
      <Header />
      <BlogListScreens blogs={blog} category={category} />
      <Footer />
    </div>
  )
}

export default Home
