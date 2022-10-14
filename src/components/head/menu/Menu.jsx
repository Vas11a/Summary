import React from 'react'
import open from './uiMenu/menu.png'
import close from './uiMenu/menu2.png'
import { Link } from 'react-scroll'
import './style.scss'
import { useState } from 'react'


export default function Menu({data}) {
  const [menu, setMenu] = useState(false);

  function openClose() {
    setMenu(menu ? false : true);
  }

  return (
    <div className='container'>
      <div className={ menu ? 'visib content'  : 'content'}>
        {
          data.names.map((elem,idx) => <Link 
          to={data.links[idx]}
          spy={true} smooth={true} offset={0} duration={800}
          key={idx}
          style={{'cursor': 'pointer'}} 
          onClick = {() => setMenu(false)}
          className='link'>{elem}</Link> )
        }
      </div>
      <div className="menu-button" onClick={openClose}>
          <img src={open} alt="open" className={menu ? 'button dNone' : 'button'} />
          <img src={close} alt="close" className={menu ? 'button' : 'button dNone'} />
      </div>
    </div>
  )
}
