import { memo } from 'react'
import { Footer } from '~/src/components/base/Footer'
import { Header } from '~/src/components/base/Header'
import { Main } from '~/src/components/base/Layout/Main'
import { Content } from '~/src/components/base/Layout/Content'

type Props = {
  children: React.ReactNode
}

export const Layout = memo(({ children }: Props) => {
  return (
    <Main>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Main>
  )
})

Layout.displayName = 'Layout'
