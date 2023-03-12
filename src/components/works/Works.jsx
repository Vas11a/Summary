import React from 'react'
import s from './works.module.scss'

export default function Works({ thema, data }) {
    return (
        <div className={s.content} id='works'>
            <hr />
            <div className={`title ${s.title}`}>Works</div>
            <div className={s.block_works}>

                {
                    data.blocks.map((elem,idx) => {
                        return (
                            <div className={s.block} key={elem+idx}>
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
                            </div>

                        )
                    })
                }



            </div>
        </div>
    )
}
