import React from 'react';
import s from './work.module.scss';
import Company from './Company';
import { motion } from 'framer-motion';

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
      duration: .5
    }
  })
}


export default function Work({ data }) {
  return (
    <motion.div 
    id='work' 
    initial='hidden'
    whileInView='visible'
    className={s.content}>
      <motion.div 
      variants={animation} 
      custom={-0.5}
      className={`title ${s.title}`}>
        {data.title}
      </motion.div>
      <div className={s.block_works}>
        {
          data.companis.map((elem, idx) => (
            <motion.div 
            variants={animation} 
            custom={idx/5}
            key={idx}>
              <Company data={elem} />
            </motion.div>
          ))
        }
      </div>
    </motion.div>
  )
}
