import React from 'react'
import s from './skills.module.scss'


export default function Skills({ data }) {
  return (
    <div className={s.content} id='skills'>
      <hr />
      <div className={`title ${s.title}`}>{data.title}</div>
      <ul>
        {
          data.skills.map((elem, idx) => <li key={idx}>{elem}</li>)
        }

      </ul>
    </div>
  )
}
