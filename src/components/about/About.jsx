import React from 'react'
import s from './about.module.scss'

export default function About({thema, data}) {
  return (
      <div className={s.content} style={thema ? null : { 'backgroundColor': '#252323', 'transitionDuration': '.5s'}} id='about'>
          <div className='title'>
            {data.title}
          </div>
          <div className={s.aboutme_info}>
              {data.info}
          </div>
      </div>
  )
}
