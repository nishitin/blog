import { GetStaticPaths } from 'next'
import { Body } from '~/src/components/base/Body'
import { CategoryCard } from '~/src/components/base/CategoryCard'
import { Layout } from '~/src/components/base/Layout'
import { ProfileCard } from '~/src/components/base/ProfileCard'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Category } from '~/src/types/category'

type blogs = {
  blog: Blog
  category: Category[]
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
  const category = await client.get({ endpoint: 'categories' })

  return {
    props: {
      blog: data,
      category: category.contents,
    },
  }
}

export default function BlogId({ blog, category }: blogs) {
  return (
    <Layout>
      <article className="w-3/5 mt-2">
        <Body blog={blog} />
      </article>
      <div className="w-1/5 ml-20 mt-5">
        <ProfileCard />
        <CategoryCard category={category} />
      </div>
    </Layout>
  )
}
