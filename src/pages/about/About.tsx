import { motion } from 'framer-motion'

import { Banner } from 'UI'
import { pageAnimation } from 'tools'
import { heading, content } from 'pages/about/about.utils'

import s from './About.module.scss'

const About = () => {
  return (
    <motion.div {...pageAnimation} className={s.about}>
      <Banner heading={heading}>{content}</Banner>
    </motion.div>
  )
}

export default About
