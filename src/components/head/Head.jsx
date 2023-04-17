import React from 'react'
import Menu from './menu/Menu'
import s from './head.module.scss'

export default function Head({ data, changeT, thema }) {
  return (
    <div
      className={s.content} >
      <Menu data={data.menu} />
      <hr />
      <div className={s.my_data}>
        <div

          className={s.data_block}>
          <div className={s.name}>{data.myInfo.name}</div>
          <div className={s.data}>{data.myInfo.data}</div>
        </div>
        <div

          className={s.photo_block}>
          <img src={data.myInfo.photo} alt="myimg" />
        </div>
      </div>
      <div
        className={s.button_block}>
        <div onClick={changeT} className={s.thems}>{thema ? 'Dark' : 'White'}</div>
      </div>
      <hr />
    </div>
  )
}
