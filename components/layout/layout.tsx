import { Fragment, ReactNode } from 'react'

import MainHeader from './main-header'

function Layout(props: { children: ReactNode }): JSX.Element {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
