import React from "react";
import './colors.css';
import './menu.css';
import MenuItem from './menuItem'

function Menu() {
  const home = '/';
  const projects = "/Projects";
  return (
    <div className='menuContainer'>
      <div className='menuItemsContainer'>
        <MenuItem link={home} title={'Home'} />
        <MenuItem link={projects} title={'Projects'} />

      </div>
    </div>
  );
}

export default Menu;