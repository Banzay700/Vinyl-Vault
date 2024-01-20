import { Outlet } from 'react-router-dom'

import { Favorites, Cart } from 'modules'
import { Header } from './header'
import { Footer } from './footer'

import s from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
      <Cart />
      <Favorites />
      <Footer />
    </div>
  )
}

export default Layout
