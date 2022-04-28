import { GetStaticPaths } from 'next'
import { Header } from '~/src/components/base/Header'
import { BlogDetailScreen } from '~/src/components/screens/BlogDetailScreens'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'

type blogs = {
  blog: Blog
}

// ここでpathを生成している。
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((contents: Blog) => `/blog/${contents.id}`)
  return { paths, fallback: false }
}

// contextはビルドする前のオブジェクトを指している。
export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}

export default function BlogId({ blog }: blogs) {
  return (
    <div>
      <Header />
      <BlogDetailScreen blog={blog} />
    </div>
  )
}
