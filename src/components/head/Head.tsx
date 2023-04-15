import { Logo } from 'UI'
import { UserModalTriggers } from 'components'

import s from './Head.module.sass'

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