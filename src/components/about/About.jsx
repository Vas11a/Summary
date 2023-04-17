import React from 'react';
import s from './about.module.scss';
import {motion} from 'framer-motion';

const animation = {
  hidden: {
    x: 500,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom + 0.5,
      duration: 0.5
    }
  })
}


export default function About({thema, data}) {
  return (
      <motion.div 
      initial='hidden'
      whileInView='visible'

      className={s.content} 
      style={thema ? null : { 'backgroundColor': '#252323', 'transitionDuration': '.5s'}} id='about'>
          <motion.div
          variants={animation}
          custom={-0.5}
          className='title'>
            {data.title}
          </motion.div>
          <motion.div 
          variants={animation}
          custom={-0.3}
          className={s.aboutme_info}>
              {data.info}
          </motion.div>
      </motion.div>
  )
}
