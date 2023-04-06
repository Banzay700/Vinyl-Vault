import { Logo } from 'UI'
import { UserActions } from 'modules'

import s from './Head.module.scss'

const Head = () => {
  return (
    <div className={s.head}>
      <Logo />
      <div>Search will be here</div>
      <UserActions />
    </div>
  )
}

export default Head
