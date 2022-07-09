import { memo } from 'react'

type Props = {
  children: React.ReactNode
}

export const Content = memo(({ children }: Props) => {
  return <div className="w-full px-10 flex justify-center">{children}</div>
})

Content.displayName = 'Content'
