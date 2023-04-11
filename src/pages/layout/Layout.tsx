import { Outlet } from 'react-router-dom'

import { FavouritesModal, CartModal } from 'modules'
import { Header } from './header'
import { Footer } from './footer'

import s from './Layout.module.sass'

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
      <CartModal />
      <FavouritesModal />
      <Footer />
    </div>
  )
}

export default Layout
