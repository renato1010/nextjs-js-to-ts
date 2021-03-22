import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps,
}: {
  Component: () => JSX.Element
  pageProps: Record<string, any>
}): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
