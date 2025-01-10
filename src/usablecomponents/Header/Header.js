import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-left-section'>
        <div className='menu-icon'>
            <img src='./menu_items/menu.svg'/>
        </div>
        <div className='search-bar-container'>
          <input type='text' placeholder='Search' className='search-input-field' />
          <img className='search-icon' src="./menu_items/search_icon.svg" alt='User'/>
        </div>
      </div>
      <div className='header-right-section'>
        <img src="./menu_items/round-notifications.svg" alt='User'/>
        <img src="./menu_items/message.svg" alt='User'/>
       <div className='user-info'>
         <img src='./menu_items/user.jpg' alt='User' className='user-avatar' />
         <span className='user-name'>Niyaz</span>
         <img className="dropdown-icon" src="./menu_items/downarrow.svg" alt='User'/>
       </div>
      </div>
    </div>
  )
}

export default Header
