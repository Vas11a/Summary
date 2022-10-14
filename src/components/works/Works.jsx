import React from 'react'
import s from './works.module.scss'

export default function Works({ thema, data }) {
    return (
        <div className={s.content} id='works'>
            <hr />
            <div className={`title ${s.title}`}>Works</div>
            <div className={s.block_works}>

                {
                    data.blocks.map(elem => {
                        return (
                            <div className={s.block}>
                                <div className={s.block_img}>
                                    <img src={elem.photo} alt="" />
                                    <div className={s.tehnologies}>
                                        {elem.steck}
                                    </div>
                                </div>
                                <a href={elem.link} 
                                    style={thema ? null : { 'color': 'white' }} 
                                    target='_blanc' 
                                    className={s.link_on_work}>{elem.name}</a>
                            </div>

                        )
                    })
                }



            </div>
        </div>
    )
}
