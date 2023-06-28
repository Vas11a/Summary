import React from 'react'
import s from './work.module.scss'

export default function Company({data}) {
    return (
        <>
            <div className={s.role}>{data.role}</div>
            <div className={s.data_work}>{data.compName}</div>
            <ul className={s.list}>
                {
                    data.resps.map((elem, idx) => (
                        <li key={idx} className={s.part}>{elem}</li>
                    ))
                }
            </ul>
        </>
    )
}
