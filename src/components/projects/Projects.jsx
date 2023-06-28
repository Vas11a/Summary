import React from 'react';
import s from './projects.module.scss';
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
      duration: 1
    }
  })
}


export default function Projects({ thema, data }) {
    return (
        <motion.div 
        initial='hidden'
        whileInView='visible'
        className={s.content} id='projects'>
            <hr />
            <motion.div 
            variants={animation} 
            custom={-0.5}
            className={`title ${s.title}`}>{data.title}</motion.div>
            <div className={s.block_works}>

                {
                    data.blocks.map((elem,idx) => {
                        return (
                            <motion.div 
                            variants={animation} 
                            custom={idx/5}
                            className={s.block} key={elem+idx}>
                                <div className={s.block_img} style={{border: `${elem.lang === 'js' ? '7px solid #F9E223' : `${elem.lang === 'ts' ? '7px solid #0090D9' : '7px solid #92C249'}`}`}}>
                                    <img src={elem.photo} alt="" />
                                    <div className={s.tehnologies}>
                                        {elem.steck}
                                    </div>
                                </div>
                                <a href={elem.link} 
                                    style={thema ? null : { 'color': 'white' }} 
                                    target='_blanc' 
                                    className={s.link_on_work}>{elem.name}</a>
                            </motion.div>

                        )
                    })
                }



            </div>
        </motion.div>
    )
}
