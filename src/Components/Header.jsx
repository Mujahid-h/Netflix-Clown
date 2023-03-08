import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import {BiSearch} from 'react-icons/bi'





const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />

        <div>
            <Link to={'/tvshows'}>TV Shows</Link>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/recent'}>Recently Added</Link>
            <Link to={'/my_list'}>My List</Link>
        </div>

        <BiSearch />


    </nav>
  )
}

export default Header