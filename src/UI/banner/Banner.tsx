import { FC } from 'react'
import s from './Banner.module.scss'

interface BannerProps {
  children?: string
  heading: string
}

const Banner: FC<BannerProps> = ({ children, heading }) => {
  return (
    <div className={s.banner}>
      <div className={s.heading}>{heading}</div>
      <div>{children}</div>
    </div>
  )
}

Banner.defaultProps = {
  children: '',
}

export default Banner
