import { Footer } from '~/src/components/base/Footer'
import { Header } from '~/src/components/base/Header'
import { BlogListScreens } from '~/src/components/screens/BlogListScreens'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Category } from '~/src/types/category'

type Props = {
  blog: Blog[]
  category: Category[]
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
  console.log(data)
  const category = await client.get({ endpoint: 'categories' })

  return {
    props: {
      blog: data.contents,
      category: category.contents,
    },
  }
}

export default function CategoryPage({ blog, category }: Props) {
  return (
    <div>
      <Header />
      <BlogListScreens blogs={blog} category={category} />
      <Footer />
    </div>
  )
}
