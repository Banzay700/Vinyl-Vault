import s from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={s.banner}>
      <div className={s.heading}>Collection</div>
      <div className={s.info}>
        There are great albums, then there are essential albums. Whether you're new to vinyl or have
        been collecting for years, we've rounded up our pick of 100 must-own modern classics we
        believe every record collection should include. From pop perfection to hip-hop and rap
        royalty, there's something for everyone regardless of music taste.
      </div>
    </div>
  )
}

export default Banner
