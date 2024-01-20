import { Link } from 'react-router-dom'
import { HeaderLogo } from 'assets'

import s from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={s.logo}>
      <Link to="/">
        <HeaderLogo />
      </Link>
    </div>
  )
}

export default Logo
