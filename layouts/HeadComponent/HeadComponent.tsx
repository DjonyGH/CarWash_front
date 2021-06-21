import Head from 'next/head'
import React from 'react'

interface IHeadProps {
  title: string
  keywords?: string
  description?: string
}
const HeadComponent: React.FC<IHeadProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {keywords && <meta name='keywords' content={keywords}></meta>}
      {description && <meta name='description' content={description}></meta>}
    </Head>
  )
}
export default HeadComponent
