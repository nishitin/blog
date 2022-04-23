import { Header } from '~/src/components/base/Header'
import { BlogScreens } from '../components/screens/BlogScreens'
import { client } from '~/src/lib/client'
import { Blog } from '~/src/types/blog'
import { Footer } from '../components/base/Footer'

type Props = {
  blogs: Blog[]
}

export const getStaticProps = async () => {
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
      <BlogScreens blogs={blogs} />
      <Footer />
    </div>
  )
}

export default Home
