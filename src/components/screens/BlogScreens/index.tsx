import { Blog } from '~/src/types/blog'
import { Card } from './components/Card'
import { ProfileCard } from './components/ProfileCard'

type Props = {
  blogs: Blog[]
}

export const BlogScreens = ({ blogs }: Props) => {
  return (
    <main className="w-full">
      <div className="w-full flex justify-center">
        <Card blogs={blogs} />
        <ProfileCard />
      </div>
    </main>
  )
}
