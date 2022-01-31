import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import {
  SidebarContainer,
  Icon,
  CloseIcon
} from './app.js'


const Sidebar = ({ isOpen, toggle }) => {
  
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} className='sidebar'>
      <Icon className='sidebar__icon' onClick={toggle}>
        <CloseIcon className='sidebar__close-icon'/>
      </Icon>
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <a href='#about' className="sidebar__link">
            About
          </a>
          <a href='#discover' className="sidebar__link">
            Discover
          </a>
          <a href='#services' className="sidebar__link">
            Services
          </a>
          <a href='#signup' className="sidebar__link">
            Sign Up
          </a>
        </div>
        <div className="sidebar__btn-wrapper">
          <NavLink to='/signin' className="sidebar__route">Sign In</NavLink>
        </div>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar;
