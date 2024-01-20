import { FC } from 'react'
import { motion } from 'framer-motion'

import { Banner } from 'UI'
import { pageAnimation } from 'utils'

import { heading, content } from './about.utils'
import s from './About.module.scss'

const About: FC = () => {
  return (
    <motion.div {...pageAnimation} className={s.about}>
      <Banner heading={heading}>{content}</Banner>
    </motion.div>
  )
}

export default About
