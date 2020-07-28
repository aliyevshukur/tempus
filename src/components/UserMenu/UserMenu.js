import React from 'react'
import { Link } from 'react-router-dom'

import './UserMenu.scss';

const  UserMenu = () => {
    return (
        <nav className="user-menu">
            <Link to="stats" className="user-menu-item">Your statistics</Link>
            <Link to="settings" className="user-menu-item">Settings</Link>
            <a href="" className="user-menu-item">Log out</a>
        </nav>
    )
}

export default UserMenu;