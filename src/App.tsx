import React, { useEffect } from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout/Layout'
import { PageWrapper } from './shared/PageWrapper/PageWrapper'

function AppComponent() {
  return (
    <Layout>
      <PageWrapper>fdfd</PageWrapper>
    </Layout>
  )
}

export const App: React.FC = hot(() => <AppComponent />)
