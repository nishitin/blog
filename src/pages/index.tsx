import { GetStaticProps } from 'next'
import { Header } from '~/src/components/base/Header'
import { BlogListScreens } from '~/src/components/screens/BlogListScreens'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Footer } from '../components/base/Footer'

type Props = {
  blogs: Blog[]
}

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blogs: blog.contents,
    },
  }
}

function Home({ blogs }: Props) {
  return (
    <div>
      <Header />
      <BlogListScreens blogs={blogs} />
      <Footer />
    </div>
  )
}

export default Home
