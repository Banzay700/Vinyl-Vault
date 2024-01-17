import { Logo } from 'UI'
import { UserModalTriggers } from 'components'

import s from './Head.module.scss'

const Head = () => {
  return (
    <div className={s.head}>
      <Logo />
      <div className={s.search}>Search will be here</div>
      <UserModalTriggers />
    </div>
  )
}

export default Head
