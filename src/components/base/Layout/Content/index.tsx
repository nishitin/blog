import { memo } from 'react'

type Props = {
  children: React.ReactNode
}

export const Content = memo(({ children }: Props) => {
  return <div className="w-11/12 mb-2 flex justify-center">{children}</div>
})

Content.displayName = 'Content'
