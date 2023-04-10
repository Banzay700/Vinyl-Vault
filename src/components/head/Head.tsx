import { Logo } from 'UI'
import { UserModalTriggers } from 'modules'

import s from './Head.module.scss'

const Head = () => {
  return (
    <div className={s.head}>
      <Logo />
      <div>Search will be here</div>
      <UserModalTriggers />
    </div>
  )
}

export default Head
