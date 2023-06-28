import React from 'react'
import {motion} from 'framer-motion';
import s from './footer.module.scss';


const animation = {
  hidden: {
    y: 1000,
    opacity: 0
  },
  visible:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}


export default function Footer({ data }) {
  return (
      <motion.div 
      initial='hidden'
      whileInView='visible'
      className={s.content} id='contacts'>
        
        <hr/>
      <motion.div 
      variants={animation} 
      className={`title ${s.title}`}>Contacts</motion.div>
      <motion.div 
      variants={animation} 
      className={s.footer_text}>Do you have questions? You are welcome!</motion.div>
          <motion.div 
          variants={animation} 
          className={s.soc_network_block}>
        
            {
                data.map((elem,idx) => {
                    return(
                        <a key={elem+idx} href={elem.link}><img src={elem.photo} alt="" /></a>
                    )
                })
            }

          </motion.div>
        <hr />
    </motion.div>
  )
}
