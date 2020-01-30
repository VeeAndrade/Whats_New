import React from 'react';
import './Menu.css'

const Menu = (props) => {
  const grabName = (event) => {
    props.changeCurrentPage(event.target.name)
  }

  return (
    <section className='menu-section'>
      <button name='local' className='menu-btn' onClick={grabName}>❖ Local</button>
      <button name='entertainment' className='menu-btn' onClick={grabName}>❖ Entertainment</button>
      <button name='health' className='menu-btn' onClick={grabName}>❖ Health</button>
      <button name='science' className='menu-btn' onClick={grabName}>❖ Science</button>
      <button name='technology' className='menu-btn' onClick={grabName}>❖ Technology</button>
    </section>
  )
}

export default Menu;