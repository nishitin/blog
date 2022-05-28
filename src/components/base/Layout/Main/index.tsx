import { memo } from 'react'

type Props = {
  children: React.ReactNode
}

export const Main = memo(({ children }: Props) => {
  return <div className="w-full">{children}</div>
})

Main.displayName = 'Main'
