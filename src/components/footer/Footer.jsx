import React from 'react'
import s from './footer.module.scss'

export default function Footer({ data }) {
  return (
      <div className={s.content} id='contacts'>
        
        <hr/>
      <div className={`title ${s.title}`}>Cocntacts</div>
      <div className={s.footer_text}>Do you have questions? You are welcome!</div>
          <div className={s.soc_network_block}>
        
            {
                data.map(elem => {
                    return(
                        <a href={elem.link}><img src={elem.photo} alt="" /></a>
                    )
                })
            }

          </div>
        <hr />
    </div>
  )
}
