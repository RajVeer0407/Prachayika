import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar2.css"
import { MenuItems } from "./MenuItems";
import Dropdown from "./Dropdown";

function Navbar2() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          NATURE 
          <Icons.FaTree />
        </Link>
        <ul className="nav-items">
          {MenuItems.map((item) => {
            if (item.title === "Service") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.url}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar2;
