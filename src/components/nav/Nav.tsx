import { NavLink } from 'react-router-dom'

import s from './Nav.module.scss'

type ClassNameProp = { isActive: boolean }

const Nav = () => {
  const navStyle = ({ isActive }: ClassNameProp) => (isActive ? s.navActiveLink : s.navLink)

  return (
    <div className={s.navWrapper}>
      <div className={s.navMenu}>
        <NavLink className={navStyle} to="/">
          Home
        </NavLink>
        <NavLink className={navStyle} to="collection">
          Collection
        </NavLink>
        <NavLink className={navStyle} to="about">
          About
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
