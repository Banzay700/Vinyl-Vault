import { FC, ReactNode } from 'react'

interface ImpProps {
  className: string
  src: string
  alt: string
  children?: ReactNode
}

const Img: FC<ImpProps> = ({ className, src, alt, children }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
      {children}
    </div>
  )
}

export default Img
