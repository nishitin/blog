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
      <header className="bg-blue-400">
        <div>
          <a className="text-white">MuscleDeveloperへの道</a>
        </div>
        <h1 className="text-white ml-10">MuscleDev</h1>
        <nav className="flex justify-end mr-10">
          <ul className="flex">
            <li className="text-white ml-4">Frontend</li>
            <li className="text-white ml-4">Backend</li>
            <li className="text-white ml-4">Training</li>
            <li className="text-white ml-4">Book</li>
            <li className="text-white ml-4">Profile</li>
          </ul>
        </nav>
      </header>
      {blogs?.map((blog) => {
        return <div key={blog.id}>{blog.title}</div>
      })}
    </div>
  )
}

export default Home
