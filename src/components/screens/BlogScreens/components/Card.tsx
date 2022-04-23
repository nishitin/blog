import { Blog } from '~/src/types/blog'

type Props = {
  blogs: Blog[]
}

export const Card = ({ blogs }: Props) => {
  return (
    <article className="w-3/5 mt-2">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="flex w-full ml-2 mt-4">
            <div className="h-32 lg:w-32 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-black"></div>
            <div className="h-32 w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="w-max">
                <p className="text-sm text-gray-600 flex items-center">カテゴリー</p>
                <div className="text-gray-900 font-bold text-xl mb-2 break-words">{blog.title}</div>
                <p className="text-gray-700 text-base"></p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-600">記事作成日: {blog.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </article>
  )
}
