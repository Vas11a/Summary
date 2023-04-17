import React from 'react';
import s from './education.module.scss';
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
      duration: .5
    }
  })
}


export default function Education({data}) {
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    className={s.content} id='education'>
        <motion.div 
        variants={animation} 
        custom={-0.5}
        className={`title ${s.title}`}>{data.title}</motion.div>
        <motion.div 
        variants={animation} 
        custom={0}
        className={s.univer}>
            <div className={s.data}>{data.univer.data}</div>
            <strong>{data.univer.name} </strong>
            {data.univer.faculty}
        </motion.div>
        <motion.div 
        variants={animation} 
        custom={0.2}
        className={s.lang_title}>{data.lang.title}</motion.div>
        <motion.div 
        variants={animation} 
        custom={0.4}
        className={s.lang_block}>
            {
                data.lang.langs.map((elem, idx) => <li key={idx} className={s.lang}>{elem.name} - {elem.know}</li>)
            }
        </motion.div>
    </motion.div>
  )
}
