import React, { useEffect } from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout/Layout'
import { PageWrapper } from './shared/PageWrapper/PageWrapper'
import { Header } from './shared/Header'
import { Logo } from './shared/Logo'
import { OrderButton } from './shared/OrderButton'
import { Main } from './shared/Main'
import { Footer } from './shared/Footer'

function AppComponent() {
  return (
    <Layout>
      <PageWrapper>
        <Header />
        <Main />
        <Logo />
        <Footer />
        <OrderButton />
      </PageWrapper>
    </Layout>
  )
}

export const App: React.FC = hot(() => <AppComponent />)
