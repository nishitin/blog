import { Blog } from '~/src/types/blog'
import { Card } from './components/Card'
import { ProfileCard } from './components/ProfileCard'
import { CategoryCard } from '~/src/components/base/CategoryCard'
import { Category } from '~/src/types/category'

type Props = {
  blogs: Blog[]
  category: Category[]
}

export const BlogListScreens = ({ blogs, category }: Props) => {
  return (
    <main className="w-full">
      <div className="w-full flex justify-center">
        <Card blogs={blogs} />
        <div className="w-1/5 ml-20">
          <ProfileCard />
          <CategoryCard category={category} />
        </div>
      </div>
    </main>
  )
}
