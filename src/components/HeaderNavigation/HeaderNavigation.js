import React,{ useState } from "react";
import { Link } from "react-router-dom";

import "./HeaderNavigation.scss";
import UserMenu from '../UserMenu/UserMenu';

//Images
import tempusLogo from "../../img/tempus-logo.png";
import search from "../../img/search.png";
import user from "../../img/user.png";

export function HeaderNavigation() {
  const [showUserMenu,setShowUserMenu]= useState(false);

  return (
    <div className={"header"}>
      <Link to="/" className="tempus-logo-wrapper">
        <img src={tempusLogo} alt="tempus logo" className={"tempus-image"} />
        <div className="tempus-title">TEMPUS</div>
      </Link>

      <div className="search-bar">
        <input type="text" className={"search-input"} />
        <a href="" className="search-button">
          <img src={search} alt="search" className={"search-image"} />
        </a>
      </div>

      <div className="user-info">
        <img src={user} alt="user" className={"user-image"} onClick={ () => setShowUserMenu( !showUserMenu)} />
        <p className={"user-desc"}>
          <p className="full-name">Full Name</p>
          <p className="username">@username</p>
        </p>

        {showUserMenu && <UserMenu />}
      </div>
    </div>
  );
}
