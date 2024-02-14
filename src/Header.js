import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Headeroption from './Headeroption.js';

function Header() {
  return (
    <div className='header'>
      
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />
         
         <div className="header__search">
             <SearchIcon />
            <input type="text" />
         </div>
      </div>

      <div className="header__right">
         <Headeroption title='Home'/>
         <Headeroption title='My Network'/>
      </div> 
    </div>
  )
}

export default Header;