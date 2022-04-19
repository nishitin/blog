import { client } from '../lib/client'
import { Blog } from '../types/blog'

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
      <li>
        {blogs?.map((blog) => {
          return <div key={blog.id}>{blog.title}</div>
        })}
      </li>
    </div>
  )
}

export default Home
