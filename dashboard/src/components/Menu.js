import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handlerMenuClick = (idx) => {
    setSelectMenu(idx);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          {[
            { name: "Dashboard", path: "/", idx: 0 },
            { name: "Orders", path: "/orders", idx: 1 },
            { name: "Holdings", path: "/holdings", idx: 2 },
            { name: "Positions", path: "/positions", idx: 3 },
            { name: "Funds", path: "/funds", idx: 4 },
            { name: "Apps", path: "/apps", idx: 5 },
          ].map((item) => (
            <li key={item.idx}>
              <Link
                to={item.path}
                style={{ textDecoration: "none" }}
                onClick={() => handlerMenuClick(item.idx)}
              >
                <p
                  className={
                    selectMenu === item.idx ? activeMenuClass : menuClass
                  }
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Login
        </button>

            
        <hr />

        <div className="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <p className="dropdown-user">USERID</p>
              <hr />
              <button onClick={() => setShowProfile(!showProfile)}>
                My Profile
              </button>

              {showProfile && (
                <div className="profile-details">
                  <p>
                    <strong>Name:</strong> Akash
                  </p>
                  <p>
                    <strong>Email:</strong> your-email@example.com
                  </p>
                  <p>
                    <strong>Password:</strong> ••••••••
                  </p>
                </div>
              )}
              <button onClick={() => alert("Settings clicked")}>
                Settings
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
