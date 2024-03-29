import { Head, Nav } from 'components'

import s from './Header.module.scss'

const Header = () => {
  return (
    <div className={s.header}>
      <Head />
      <Nav />
    </div>
  )
}

export default Header
