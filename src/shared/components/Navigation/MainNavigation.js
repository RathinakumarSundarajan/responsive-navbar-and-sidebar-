import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)


  const openDrawerhandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }


  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}   -----------here this onClick is a props------------
    <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>  --------- here this onClick is a props
      <nav className='main-navigation__drawer-nav'>
        <NavLinks/>
      </nav>
    </SideDrawer>

    <MainHeader>
      <button className='main-navigation__menu-btn' onClick={openDrawerhandler}>
        <span/>
        <span/>
        <span/>
        <span/>
      </button>
      <h1 className='main-navigation__title'><Link to='/'>YourPlace</Link></h1>
      <nav className='main-navigation__header-nav'>
        <NavLinks/>
      </nav>
    </MainHeader>
    </Fragment>
  )
}

export default MainNavigation
