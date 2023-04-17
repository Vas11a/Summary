import React from 'react';
import s from './skills.module.scss';
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


export default function Skills({ data }) {
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    
    className={s.content} id='skills'>
      <hr />
      <motion.div
      variants={animation} 
      custom={-0.5}
      className={`title ${s.title}`}>{data.title}</motion.div>
      <ul>
        {
          data.skills.map((elem, idx) => <motion.li 
          variants={animation} 
          custom={idx/5}
          key={idx}>{elem}</motion.li>)
        }

      </ul>
    </motion.div>
  )
}
