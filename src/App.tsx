import React, { useEffect } from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout/Layout'

function AppComponent() {
  return <Layout></Layout>
}

export const App: React.FC = hot(() => <AppComponent />)
